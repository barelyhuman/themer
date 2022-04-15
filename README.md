<p align="center">
  <img src="images/themer.png" height="64">
<p align="center">Graceful dark mode support in vanilla javascript</p>

 <p>
 <a href="https://www.npmjs.com/package/@barelyreaper/themer"><img src="https://img.shields.io/npm/v/@barelyreaper/themer?style=flat&amp;colorA=000000&amp;colorB=000000" alt="Version"></a>
 <a href="https://www.npmjs.com/package/@barelyreaper/themer"><img src="https://img.shields.io/npm/dt/@barelyreaper/themer.svg?style=flat&amp;colorA=000000&amp;colorB=000000" alt="Downloads"></a>
 </p>

## How ?

by adding `data-dark-mode` attribute to the `body` tag on the document, aka you can use css selectors to either use custom css or use system preference, in case there's no JS

## Mandatory 4 Feature points

- Tiny , it's (3KB unminified,1KB minified, check `.sizesnap.json` for exact size details) and the type definitions take the most space, so you can technically avoid them altogether based on your bundler
- Available in ESM,CJS,UMD(as a cdn file) , so i don't care what bundler you use, or if you don't use bundlers at all.
- Backed by Tests, like every other library out there
- One of the few libraries that doesn't render useless when javascript is disabled, you need to tweak your css a bit, but you handle system preference theming pretty easily.

Not Convinced? Okay.

## Usage

You can use it via a CDN like unpkg or via npm using

**Note: The library is an ES Module and thus needs to either be used by a web bundler or using `<script type="module">` in vanilla HTML.**

```sh
npm i @barelyreaper/themer
# or
yarn add @barelyreaper/themer
```

Then in your js file.

```js
import {
	init, // adds a listener for handling browser's preference changes
	getCurrentTheme, // returns a string pointing to "auto","dark","light"
	getCurrentThemeSimplified, // returns a string pointing to "dark","light" (to be used for icons as the "auto" mode depends on a combination of preferences)
	toggleTheme, // the handler that you'll add to your button
} from '@barelyreaper/themer'
```

```html
<!-- might wanna version lock the url by opening it in the browser first to get a version tagged url -->
<script src="https://unpkg.com/@barelyreaper/themer/index.browser.js"></script>
<script>
	const {init, getCurrentTheme, getCurrentThemeSimplified, toggleTheme} = themer
</script>
```

Write the css classes with respect to the existence of `data-dark-mode` attribute on the body tag

```css
body {
	--bg: #eceff4;
	--bg-light: #e5e9f0;
	--bg-lighter: #d8dee9;
	--fg: #2e3440;
	--fg-light: #3b4252;
	--fg-lighter: #434c5e;
	--shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
}

body.dark {
	--bg: #121212;
	--bg-light: #191919;
	--bg-lighter: #252525;
	--fg: #d8dee9;
	--fg-light: #e5e9f0;
	--fg-lighter: #eceff4;
	--shadow: rgb(15 17 21 / 20%) 0px 3px 6px 0px;
}
```

## Dev

```sh
pnpm i # Install deps
pnpm dev # Run the dev watcher
pnpm web:dev # start the web server that can be used to test the bundled library
```

## Build

```sh
pnpm build
```

# Contribute

- pick up an issue from the issues (do comment on the issues to avoid overlaps)
- fork the repo
- clone it
- do your magic
- raise a PR!
