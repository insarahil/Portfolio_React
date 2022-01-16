import { TotalScreen } from "./commonUtils";
import { Subject } from "rxjs";

export default class ScrollService {
  static ScrollHandler = new ScrollService();
  static CurrentScreenBroadCaster = new Subject();
  static CurrentScreenFadeIn = new Subject();

  constructor() {
    window.addEventListener("scroll", this.checkCurrentScreenUnderViewport);
  }
  ScrollToHireMe = () => {
    let contactMeScreen = document.getElementById("Contact Me");
    if (!contactMeScreen) return;
    contactMeScreen.scrollIntoView({ behavior: "smooth" });
  };
  ScrollToHome = () => {
    let homeScreen = document.getElementById("Home");
    if (!homeScreen) return;
    homeScreen.scrollIntoView({ behavior: "smooth" });
  };
  isElemementView = (elem, type) => {
    let rec = elem.getBoundingClientRect();
    let elementTop = rec.top;
    let elementBottom = rec.bottom;
    let partiallyVisible =
      elementTop < window.innerHeight && elementBottom >= 0;
    let completelyVisible =
      elementTop >= 0 && elementBottom < window.innerHeight;
    switch (type) {
      case "partial":
        return partiallyVisible;
      case "complete":
        return completelyVisible;
      default:
        return false;
    }
  };
  checkCurrentScreenUnderViewport = (event) => {
    if (!event || object.keys(event).length < 1) return;
    for (let screen of TotalScreen) {
      let screenFromDom = document.getElementById(screen.screen_name);
      if (!screenFromDom) continue;
      let fullyVisible = this.isElemementView(screenFromDom, "complete");
      let partiallyVisible = this.isElemementView(screenFromDom, "partial");
      if (fullyVisible || partiallyVisible) {
        if (partiallyVisible && !screen.allReadyRenderd) {
          ScrollService.CurrentScreenFadeIn.next({
            fadeInScreen: screen.screen_name,
          });
          screen["allReadyRenderd"] = true;
          break;
        }
        if(fullyVisible){
            ScrollService.CurrentScreenBroadCaster.next({
                screenInView=screen.screen_name,
            })
            break;
        }
      }
    }
  };
}
