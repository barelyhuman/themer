import { isDark } from "./isDark";
import { setStore } from "./storage";
import { LOCALSTORAGE } from "./constants";
import { getCurrentTheme } from "./getCurrentTheme";

export function isTargetDark() {
  return document.body.classList.contains("dark");
}

export function setTargetDark(bool) {
  if (bool) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

/**
 * @description toggle between dark, auto, and light
 */
export function toggleTheme() {
  const dark = isDark();
  const current = getCurrentTheme();

  const themeIsDarkAuto = dark && current == "auto";
  const themeIsDark = !dark && current == "dark";

  if (themeIsDarkAuto || themeIsDark) {
    setTargetDark(0);
  } else {
    setTargetDark(1);
  }

  setStore(LOCALSTORAGE, getCurrentTheme());
}
