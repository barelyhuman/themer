import {test} from 'uvu'
import * as assert from 'uvu/assert'
import * as ENV from './setup/env'
import sinon from 'sinon'
import {getCurrentTheme, init, setTheme} from '../src'
import {THEME_DATA_ATTR} from '../src/constants'

test.before(ENV.setup)
test.before.each(ENV.reset)

const isThemeOnBody = theme =>
	document.body.getAttribute(THEME_DATA_ATTR) === theme

test('should be light, if system is light and no pref saved', () => {
	ENV.setSystemTheme('light')
	const spyProxy = sinon.spy(init)
	spyProxy()
	const currTheme = getCurrentTheme()
	assert.is(currTheme, 'light')
})

test('should be dark, if system is dark and no pref saved', () => {
	ENV.setSystemTheme('dark')
	const spyProxy = sinon.spy(init)
	spyProxy()
	const currTheme = getCurrentTheme()
	assert.is(currTheme, 'dark')
})

test('should be dark, if system is light and pref saved as dark', () => {
	ENV.setSystemTheme('light')
	const initProxy = sinon.spy(init)
	const toggleProxy = sinon.spy(setTheme)
	initProxy()
	toggleProxy('dark')
	const currTheme = getCurrentTheme()
	assert.ok(currTheme === 'dark')
})

test('should be light, if system is dark and toggledTheme', () => {
	ENV.setSystemTheme('dark')
	const initProxy = sinon.spy(init)
	const toggleProxy = sinon.spy(setTheme)
	initProxy()
	toggleProxy('light')
	const currTheme = getCurrentTheme()
	assert.ok(currTheme === 'light')
})

test('should have dark class on body', () => {
	ENV.setSystemTheme('dark')
	const initProxy = sinon.spy(init)
	initProxy()
	if (getCurrentTheme() === 'light') {
		setTheme('dark')
	}
	assert.ok(isThemeOnBody('dark'))
})

test('should not have dark class on body', () => {
	ENV.setSystemTheme('light')
	const initProxy = sinon.spy(init)
	initProxy()
	if (getCurrentTheme() === 'dark') {
		setTheme('light')
	}
	assert.ok(isThemeOnBody('light'))
})

test('should be pref if set | dark', () => {
	ENV.setSystemTheme('dark')
	const initProxy = sinon.spy(init)
	initProxy()
	setTheme('chocolate')
	assert.is(getCurrentTheme(), 'chocolate')
	assert.ok(isThemeOnBody('chocolate'))
})

test('should be pref if set | light', () => {
	ENV.setSystemTheme('light')
	const initProxy = sinon.spy(init)
	initProxy()
	setTheme('chocolate')
	assert.is(getCurrentTheme(), 'chocolate')
	assert.ok(isThemeOnBody('chocolate'))
})

test.run()
