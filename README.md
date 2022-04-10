# themer

One line dark mode support for javascript

 <p>
 <img alt="GitHub" src="https://img.shields.io/github/license/barelyhuman/themer?logoColor=000&colorA=000000&colorB=000000">
<a href="https://bundlephobia.com/result?p=@barelyreaper/themer"><img src="https://img.shields.io/bundlephobia/minzip/@barelyreaper/themer?label=bundle%20size&amp;style=flat&amp;colorA=000000&amp;colorB=000000" alt="Build Size"></a>
 <a href="https://www.npmjs.com/package/@barelyreaper/themer"><img src="https://img.shields.io/npm/v/@barelyreaper/themer?style=flat&amp;colorA=000000&amp;colorB=000000" alt="Version"></a>
 <a href="https://www.npmjs.com/package/@barelyreaper/themer"><img src="https://img.shields.io/npm/dt/@barelyreaper/themer.svg?style=flat&amp;colorA=000000&amp;colorB=000000" alt="Downloads"></a>
 </p>

# About

Themer adds a `dark` class to the `body` tag on the document

# Usage

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
} from "@barelyreaper/themer";
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

# Dev

```sh
pnpm i # Install deps
pnpm dev # Run the dev watcher
pnpm web:dev # start the web server that can be used to test the bundled library
```

# Build

```sh
pnpm build
```

# Contribute

- pick up an issue from the issues (do comment on the issues to avoid overlaps)
- fork the repo
- clone it
- do your magic
- raise a PR!
