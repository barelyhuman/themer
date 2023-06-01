import {LOCALSTORAGE} from './constants'
import {isDark} from './isDark'
import {schemeChangeListener} from './schemeChangeListener'
import {getStore} from './storage'
import {setTheme} from './theme'

interface Init {
	onChange?: (params: {theme: string}) => void
	lightPref?: string
	darkPref?: string
}

/**
 * @description to be run as soon as possible, maybe in your entry point file
 * so the Themer can setup the needed listeners for theme changes
 * @returns a function to cleanup the listeners
 */
export function init({
	onChange = () => {},
	lightPref = 'light',
	darkPref = 'dark',
}: Init = {}) {
	const pref = getStore(LOCALSTORAGE)

	// Browser is in dark mode
	const dark = isDark()

	if (!pref?.length) {
		if (dark) {
			setTheme(darkPref)
		} else {
			setTheme(lightPref)
		}
	} else {
		setTheme(pref)
	}

	return schemeChangeListener({onChange: onChange})
}
