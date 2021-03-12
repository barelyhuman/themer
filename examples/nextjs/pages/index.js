import Themer from '@barelyreaper/themer';
import { useEffect, useRef, useState } from 'react';
import '../static/vendor/prism';
import feather from 'feather-icons';

export default function Home() {
  let themerInstance;

  useEffect(() => {
    initThemer();
    themerInstance = new Themer();
  }, []);

  function initThemer() {
    new Themer({ trigger: document.getElementById('toggleTheme') });
  }

  const externalIcon = feather.icons['external-link'].toSvg({
    height: 16,
    width: 16,
  });

  return (
    <>
      <header className="container-boundaries">
        <div className="flex justify-between">
          <h1>themer</h1>
          <div className="ml-auto">
            <button id="toggleTheme" className="no-border icon"></button>
          </div>
        </div>

        <nav>
          <a className="ml-1" href="#about">
            About
          </a>
          <a className="ml-1" href="#demo">
            Demo
          </a>
          <a className="ml-1" href="#usage">
            Usage
          </a>
          <a className="ml-1" href="#support">
            Support
          </a>
          <a className="ml-1" href="https://github.com/barelyhuman/commitlog">
            Github{' '}
            <span>
              <i data-feather="external-link"></i>
            </span>
          </a>
        </nav>
      </header>
      <main className="container-boundaries">
        <article>
          <h2 id="about">About</h2>
          <p>
            <strong>themer</strong> was made as a part of{' '}
            <a href="https://github.com/barelyhuman/commitlog-web">
              commitlog-web
            </a>
            . To support both system preference and manual selection by users
            for the base theme of an app. It bases off it's decision based on
            the state set by the user. If a user is visiting the site for the
            first time the state is set to pick the current system preference
            and set that as the chosen theme
          </p>
          <p>
            If the user then decides to switch the theme using the toggle, the
            selected theme is set as a permanent preference for that website
            unless the site data is cleared from the browser.
          </p>
        </article>

        <article>
          <h2 id="demo">Demo</h2>
          <p>
            A demo of the above can be seen both at{' '}
            <a href="https://commitlog-web.herokuapp.com">commitlog-web</a> and
            on this very site.
          </p>
          <p>or you could use the below custom implementation</p>
          <div>
            <button
              onClick={(e) => themerInstance.setTheme('light')}
            >
              Enable Light Mode
            </button>
            <button
              className="ml-1"
              onClick={(e) => themerInstance.setTheme('dark')}
            >
              Enable Dark Mode
            </button>
            <button
              className="ml-1"
              onClick={(e) => themerInstance.setTheme('system')}
            >
              Use System Preference
            </button>
          </div>
        </article>

        <article className="mt-1">
          <h2 id="usage">Usage</h2>
          <p>
            The library was built for vanilla javascript so it's pretty easy to
            use in any other framework/ui-library that you might choose to use.
            I'll list out the basic steps.
          </p>
          <li>
            Install `@barelyreaper/themer` if using a bundler{' '}
            <strong>or</strong> add this to your html scripts.
          </li>
          <pre className="banner">
            <code className="font-code language-shell">{`npm i @barelyreaper/themer`}</code>
          </pre>
          <pre className="banner">
            <code className="font-code language-js">
              {`<script src="https://www.unpkg.com/@barelyreaper/themer"></script>`}
            </code>
          </pre>
          <li>
            Next, we create an instance of <code className="code">Themer</code>{' '}
            with the <code className="code">trigger</code> element passed to it
            to use the default icons provided by the library, (this needs{' '}
            <strong>feather-icons</strong> installed)
          </li>
          <pre className="banner">
            <code className="font-code language-shell">{`npm i feather-icons`}</code>
          </pre>
          <li>You can then follow the example below</li>
          <pre className="banner">
            <code className="font-code language-html">
              {`<main class="container-bounds">
<div>
  <button class="no-border icon" id="toggleTheme"></button>
</div>
<div>
  <button id="customToggleTheme" class="secondary">Enable Light Mode</button>
</div>
</main>
<script src="https://unpkg.com/feather-icons"></script>
<script src="node_modules/themer/dist/index.umd.js"></script>
<script>
// The default themer
// Needs feather-icons!
new Themer({
  trigger: document.getElementById('toggleTheme'),
});

// Custom themer
const themerInstance = new Themer();

const enableLightMode = document.getElementById('customToggleTheme');


enableLightMode.addEventListener('click', (event) => {
  themerInstance.setTheme('light');
});
</script>`}
            </code>
          </pre>
        </article>
        <article>
          <h2 id="support">Support</h2>
          <p>If you do like this project, please consider supporting it.</p>
          <a href="https://www.buymeacoffee.com/barelyhuman">
            <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=barelyhuman&button_colour=000000&font_colour=ffffff&font_family=Inter&outline_colour=ffffff&coffee_colour=FFDD00" />
          </a>
        </article>
      </main>
      <footer className="container-bounds">
        <p className="text-center">
          2021 &copy; Made for developers by{' '}
          <a href="https://reaper.im"> Reaper</a>
        </p>
      </footer>
    </>
  );
}
