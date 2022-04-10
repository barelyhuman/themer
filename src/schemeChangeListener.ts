import { isDark } from "./isDark";
import { getStore } from "./storage";
import { CONSTANTS } from "./constants";

export function schemeChangeListener() {
  const handler = () => {
    const pref = getStore(CONSTANTS.LOCALSTORAGE);
    const dark = isDark();
    if ((pref === "auto" && dark) || pref === "dark") {
      document.body.classList.add("dark");
    }
    if ((pref === "auto" && !dark) || pref === "light") {
      document.body.classList.remove("dark");
    }
  };

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", handler);

  return () => {
    return window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", handler);
  };
}
