import {test} from 'uvu'
import * as assert from 'uvu/assert'
import * as ENV from './setup/env'
import sinon from 'sinon'
import {getCurrentTheme, init, toggleTheme} from '../src'

test.before(ENV.setup)
test.before.each(ENV.reset)

test('should be auto, if system is light', () => {
	ENV.setSystemTheme('light')
	const spyProxy = sinon.spy(init)
	spyProxy()
	const currTheme = getCurrentTheme()
	assert.ok(currTheme === 'auto')
})

test('should be dark, if system is light and toggledTheme', () => {
	ENV.setSystemTheme('light')
	const initProxy = sinon.spy(init)
	const toggleProxy = sinon.spy(toggleTheme)
	initProxy()
	toggleProxy()
	const currTheme = getCurrentTheme()
	assert.ok(currTheme === 'dark')
})

test('should be auto, if system is dark', () => {
	ENV.setSystemTheme('dark')
	const initProxy = sinon.spy(init)
	initProxy()
	const currTheme = getCurrentTheme()
	assert.ok(currTheme === 'auto')
})

test('should be light, if system is dark and toggledTheme', () => {
	ENV.setSystemTheme('dark')
	const initProxy = sinon.spy(init)
	const toggleProxy = sinon.spy(toggleTheme)
	initProxy()
	toggleProxy()
	const currTheme = getCurrentTheme()
	assert.ok(currTheme === 'light')
})

test('should have dark class on body', () => {
	ENV.setSystemTheme('dark')
	const initProxy = sinon.spy(init)
	initProxy()
	if (getCurrentTheme() === 'light') {
		toggleTheme()
	}
	assert.ok(document.body.classList.contains('dark'))
})

test('should not have dark class on body', () => {
	ENV.setSystemTheme('light')
	const initProxy = sinon.spy(init)
	initProxy()
	if (getCurrentTheme() === 'dark') {
		toggleTheme()
	}
	assert.not.ok(document.body.classList.contains('dark'))
})

test.run()
