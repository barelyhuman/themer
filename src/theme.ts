import {LOCALSTORAGE, THEME_DATA_ATTR} from './constants'
import {setStore} from './storage'

export function setTheme(themeName) {
	document.body.setAttribute(THEME_DATA_ATTR, themeName)
	setStore(LOCALSTORAGE, getCurrentTheme())
}

export function getTargetTheme() {
	return document.body.getAttribute(THEME_DATA_ATTR) || 'default'
}

/**
 *
 * @description get the current theme based on current
 * active theme and system preference
 */
export function getCurrentTheme() {
	return getTargetTheme()
}
