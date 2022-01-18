import Home from "../components/home/Home";

export const TotalScreen = [
  {
    screen_name: "Home",
    components: Home,
  },
];
export const GetScreenIndex = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TotalScreen.length; i++) {
    if (TotalScreen[i].screen_name === screen_name) return i;
  }
  return -1;
};
