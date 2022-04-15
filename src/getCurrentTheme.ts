import {isDark} from './isDark'

export function isTargetDark() {
	return document.body.getAttribute('data-dark-mode') === 'dark'
}

/**
 *
 * @description get the current theme based on current
 * active theme and system preference
 */
export function getCurrentTheme() {
	const activeStyleDark = isTargetDark()
	const dark = isDark()

	let theme = activeStyleDark
		? dark
			? 'auto'
			: 'dark'
		: dark
		? 'light'
		: 'auto'

	return theme
}

export function getCurrentThemeSimplified() {
	const activeStyleDark = isTargetDark()

	let theme = activeStyleDark ? 'dark' : 'light'

	return theme
}
