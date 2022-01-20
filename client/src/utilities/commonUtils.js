import Home from "../components/home/Home";
import AboutMe from "../components/aboutme/AboutMe";

export const TotalScreen = [
  {
    screen_name: "Home",
    components: Home,
  },
  {
    screen_name: "AboutMe",
    components: AboutMe,
  },
];
export const GetScreenIndex = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TotalScreen.length; i++) {
    if (TotalScreen[i].screen_name === screen_name) return i;
  }
  return -1;
};
