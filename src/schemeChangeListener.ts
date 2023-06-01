import {windowDarkMedia} from './browser'
import {LOCALSTORAGE} from './constants'
import {getStore} from './storage'
import {getCurrentTheme, setTheme} from './theme'

export function schemeChangeListener({onChange = ({theme = ''}) => {}}) {
	const handler = _ => {
		const pref = getStore(LOCALSTORAGE)

		setTheme(pref || 'default')

		onChange &&
			typeof onChange === 'function' &&
			onChange({theme: getCurrentTheme()})
	}

	windowDarkMedia().addEventListener('change', handler)

	return () => {
		return windowDarkMedia().removeEventListener('change', handler)
	}
}
