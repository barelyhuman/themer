import { isDark } from "./isDark";
import { getStore } from "./storage";
import { LOCALSTORAGE } from "./constants";
import { setTargetDark } from "./toggleTheme";
import { windowDarkMedia } from "./browser";

export function schemeChangeListener() {
  const handler = () => {
    const pref = getStore(LOCALSTORAGE);
    const dark = isDark();
    if ((pref === "auto" && dark) || pref === "dark") {
      setTargetDark(1);
    }
    if ((pref === "auto" && !dark) || pref === "light") {
      setTargetDark(0);
    }
  };

  windowDarkMedia.addEventListener("change", handler);

  return () => {
    return windowDarkMedia.removeEventListener("change", handler);
  };
}
