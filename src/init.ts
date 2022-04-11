import { isDark } from "./isDark";
import { schemeChangeListener } from "./schemeChangeListener";
import { getStore } from "./storage";
import { LOCALSTORAGE } from "./constants";
import { setTargetDark } from "./toggleTheme";

/**
 * @description to be run as soon as possible, maybe in your entry point file
 * so the Themer can setup the needed listeners for theme changes
 * @returns a function to cleanup the listeners
 */
export function init() {
  const pref = getStore(LOCALSTORAGE);
  const dark = isDark();

  if ((pref === "auto" && dark) || pref === "dark") {
    setTargetDark(1);
  }

  if ((pref === "auto" && !dark) || pref === "light") {
    setTargetDark(0);
  }

  return schemeChangeListener();
}
