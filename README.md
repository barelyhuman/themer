# themer
One line dark mode support for javascript

![](https://badgen.net/bundlephobia/min/)

# About
Themer adds a `data-dark-mode` attribute to the `body` tag on your `index.html`.
The tag doesn't exist on the light setting and exists on the dark setting.

You can use the [style.template.css](/style.template.css) as a reference on how it was intended to use though there's no limitation on how you use the above modification. You can write individual classes using the above attribute or use variables or if you've got a more creative solution, that.

# Usage
You can use it via a CDN like unpkg or via npm using

```sh
npm i @barelyreaper/themer feather-icons
# or
yarn add @barelyreaper/themer feather-icons
```

Then in your js file.

```js
import Themer from '@barelyreaper/themer`;

/*
* @param options { trigger elementRef / queryString }
*/
new Themer({trigger: document.querySelector('#themeToggleButton') })
// or
new Themer({trigger: document.getElementById('themeToggleButton') })
// or
new Themer({trigger: '#themeToggleButton' })
```

Write the css classes with respect to the existence of `data-dark-mode` attribute on the body tag

```css

:root {
    --bg: #eceff4;
    --bg-light: #e5e9f0;
    --bg-lighter: #d8dee9;
    --fg: #2e3440;
    --fg-light: #3b4252;
    --fg-lighter: #434c5e;
    --shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
  }

  body[data-dark-mode='dark'] {
    --bg: #121212;
    --bg-light: #191919;
    --bg-lighter: #252525;
    --fg: #d8dee9;
    --fg-light: #e5e9f0;
    --fg-lighter: #eceff4;
    --shadow: rgb(15 17 21 / 20%) 0px 3px 6px 0px;
  }

  /* Remaing Styles and needed Over-rides */
  /* .... */

```

**NOTE**: as of v0.1.0 , `data-dark-mode` is set with `light` or `dark` based on the JS, this is to allow you to use css like below when javascript is not available/disabled and you want to the app to respect the user's system setting

```css
/* Handle default system selection when javascript is unavailable */
@media (prefers-color-scheme: dark) {
  body:not([data-dark-mode]) {
    --bg: #121212;
    --bg-light: #191919;
    --bg-lighter: #252525;
    --fg: #d8dee9;
    --fg-light: #e5e9f0;
    --fg-lighter: #eceff4;
    --shadow: rgb(15 17 21 / 20%) 0px 3px 6px 0px;
  }
}
```

# Advanced Usage

You can check more examples in the [examples folder](/examples)

# Dev 
```sh
yarn # Install deps
yarn dev # Run the dev watcher
yarn link # link the themer package
cd examples/html #(or any other example folder)
yarn link @barelyreaper/themer

# Run the appropriate dev server of the example. 
# You can use `npx servor examples/html` for the html one

```

# Build 
```sh
yarn build
```

# Contribute 
- pick up an issue from the issues (do comment on the issues to avoid overlaps)
- fork the repo
- clone it
- do your magic 
- raise a PR!




