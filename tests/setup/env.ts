import {JSDOM} from 'jsdom'
import sinon from 'sinon'

const {window} = new JSDOM('<main></main>')
const sandbox = sinon.createSandbox()
let matchMediaStub
let localStorageMock = {}
export function setup() {
	try {
		global.window = window
		global.document = window.document
		global.navigator = window.navigator
		global.getComputedStyle = window.getComputedStyle
		global.requestAnimationFrame = null
		global.window.matchMedia = (): any => {}

		global.localStorage = <any>{
			getItem: (key): string => {
				return ''
			},
			setItem: (key, value) => {},
		}

		sandbox
			.stub(global.localStorage, 'getItem')
			.callsFake(key => localStorageMock[key])

		sandbox.stub(global.localStorage, 'setItem').callsFake((key, value) => {
			localStorageMock[key] = value
		})

		matchMediaStub = sandbox.stub(global.window, 'matchMedia')
	} catch (err) {
		console.error(err)
	}
}

export function setSystemTheme(theme: 'light' | 'dark') {
	return matchMediaStub.callsFake(query => {
		return {
			media: query,
			matches: theme === 'dark' ? true : false,
			addEventListener: sinon.stub(),
			removeEventListener: sinon.stub(),
		}
	})()
}

export function reset() {
	window.document.title = ''
	window.document.head.innerHTML = ''
	window.document.body.innerHTML = '<main></main>'
	localStorageMock = {}
	sandbox.reset()
}
