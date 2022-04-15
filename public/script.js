// import { init, getCurrentThemeSimplified, toggleTheme } from "../dist/index";

const {init, getCurrentThemeSimplified, toggleTheme} = themer

// @ts-ignore
import asleep from '@carbon/icons/svg/32/asleep.svg'
// @ts-ignore
import awake from '@carbon/icons/svg/32/awake.svg'

function main() {
	const themeTextElm = document.getElementById('theme')
	const btn = document.querySelector('button')

	init({
		onChange({theme}) {
			themeTextElm.innerHTML = theme
			icon.rerender(theme)
		},
	})

	const theme = getCurrentThemeSimplified()

	// set current theme text
	themeTextElm.innerText = theme

	const icon = createSVGIcon({theme})

	btn.appendChild(icon.el)

	btn.addEventListener('click', () => {
		toggleTheme()
		themeTextElm.innerText = getCurrentThemeSimplified()
		icon.rerender()
	})
}

/**
 *
 * @param {object} options
 * @param {string} options.theme
 * @returns
 */
function createSVGIcon(options) {
	const icon = document.createElement('object')
	// create the object area for the svg icon
	icon.setAttribute('height', '32px')

	if (options.theme == 'dark') {
		icon.setAttribute('data', awake)
	} else {
		icon.setAttribute('data', asleep)
	}

	icon.onload = function () {
		maskIconColor.bind(this)()
	}

	return {el: icon, rerender: renderIcon.bind(icon)}
}

function renderIcon(theme) {
	const _theme = theme || getCurrentThemeSimplified()
	if (_theme == 'dark') {
		this.setAttribute('data', awake)
	} else {
		this.setAttribute('data', asleep)
	}
}

function maskIconColor() {
	const svg = this.getSVGDocument()

	// if accessed before the data in the object element has loaded
	if (!svg) {
		return
	}

	const style = getComputedStyle(document.body)
	const color = style.getPropertyValue('--text')
	svg.rootElement.setAttribute('fill', color)
}

main()
