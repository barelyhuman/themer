import {isDark} from './isDark'
import {getStore} from './storage'
import {LOCALSTORAGE} from './constants'
import {setTargetDark} from './toggleTheme'
import {windowDarkMedia} from './browser'
import {getCurrentThemeSimplified} from './getCurrentTheme'

export function schemeChangeListener({onChange}) {
	const handler = e => {
		const pref = getStore(LOCALSTORAGE)
		const dark = e.matches

		if ((pref === 'auto' && dark) || pref === 'dark') {
			setTargetDark(1)
		}
		if ((pref === 'auto' && !dark) || pref === 'light') {
			setTargetDark(0)
		}

		onChange &&
			typeof onChange === 'function' &&
			onChange({theme: getCurrentThemeSimplified()})
	}

	windowDarkMedia().addEventListener('change', handler)

	return () => {
		return windowDarkMedia().removeEventListener('change', handler)
	}
}
