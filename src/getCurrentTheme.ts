import { isDark } from "./isDark";

/**
 *
 * @description get the current theme based on current
 * active theme and system preference
 */
export function getCurrentTheme() {
  const activeStyleDark = document.body.classList.contains("dark");
  const dark = isDark();

  let theme = activeStyleDark
    ? dark
      ? "auto"
      : "dark"
    : dark
    ? "light"
    : "auto";

  return theme;
}

export function getCurrentThemeSimplified() {
  const activeStyleDark = document.body.classList.contains("dark");

  let theme = activeStyleDark ? "dark" : "light";

  return theme;
}
