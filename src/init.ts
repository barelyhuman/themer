import { isDark } from "./isDark";
import { schemeChangeListener } from "./schemeChangeListener";
import { getStore } from "./storage";
import { CONSTANTS } from "./constants";

/**
 * @description to be run as soon as possible, maybe in your entry point file
 * so the Themer can setup the needed listeners for theme changes
 * @returns a function to cleanup the listeners
 */
export function init() {
  const pref = getStore(CONSTANTS.LOCALSTORAGE);
  const dark = isDark();

  if ((pref === "auto" && dark) || pref === "dark") {
    document.body.classList.add("dark");
  }
  if ((pref === "auto" && !dark) || pref === "light") {
    document.body.classList.remove("dark");
  }

  return schemeChangeListener();
}
