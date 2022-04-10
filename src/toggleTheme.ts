import { isDark } from "./isDark";
import { setStore } from "./storage";
import { CONSTANTS } from "./constants";
import { getCurrentTheme } from "./getCurrentTheme";

/**
 * @description toggle between dark, auto, and light
 */
export function toggleTheme() {
  const dark = isDark();
  const current = getCurrentTheme();

  const themeIsDarkAuto = dark && current == "auto";
  const themeIsDark = !dark && current == "dark";

  if (themeIsDarkAuto || themeIsDark) {
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
  }

  setStore(CONSTANTS.LOCALSTORAGE, getCurrentTheme());
}
