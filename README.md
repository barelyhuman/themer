# themer
one line dark mode support for javascript

# DISCLAIMER: PACKAGE NOT YET PUSHED TO NPM / UNPKG

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


```styles.css

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




