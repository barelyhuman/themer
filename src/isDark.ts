import {windowDarkMedia} from './browser'

export function isDark() {
	return windowDarkMedia().matches
}
