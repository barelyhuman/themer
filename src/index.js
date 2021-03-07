import feather from 'feather-icons';

function Themer({ trigger = '' } = {}) {
  let element = trigger;
  let defaultState = localStorage.getItem('theme') || 'system';
  setTheme(defaultState);

  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  darkModeMediaQuery.addEventListener('change', (e) => {
    const darkModeOn = e.matches;
    if (darkModeOn) {
      document.body.setAttribute('data-dark-mode', 'dark');
    } else {
      document.body.removeAttribute('data-dark-mode');
    }
    if (metaThemeColor) {
      metaThemeColor.content = darkModeOn ? '#121212' : '#eceff4';
    }
  });

  if (element) {
    if (typeof trigger === 'string') {
      element = document.querySelector(trigger);
    }

    element.addEventListener('click', () => {
      const theme = getNextTheme();
      setTheme(theme);
    });
  }

  function getNextTheme() {
    const current = localStorage.getItem('theme');
    switch (current) {
      case 'light': {
        return 'dark';
      }
      case 'dark': {
        return 'system';
      }
      case 'system': {
        return 'light';
      }
    }
  }

  function getIcon(theme) {
    if (!feather) {
      throw new Error('From Themer, Missing dependency `feather-icons`');
    }

    switch (theme) {
      case 'system': {
        return feather.icons['circle'].toSvg({
          height: 18,
          width: 18,
        });
      }
      case 'light': {
        return feather.icons['sun'].toSvg({
          fill: 'currentColor',
          height: 18,
          width: 18,
        });
      }
      case 'dark': {
        return feather.icons['moon'].toSvg({
          fill: 'currentColor',
          height: 18,
          width: 18,
        });
      }
    }
  }

  function updateStorageAndElements(theme) {
    if (element) {
      const iconSVG = getIcon(theme);
      element.innerHTML = iconSVG;
    }

    switch (theme) {
      case 'light': {
        document.body.removeAttribute('data-dark-mode');
        break;
      }
      case 'dark': {
        document.body.setAttribute('data-dark-mode', 'dark');
      }
      case 'system': {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.body.setAttribute('data-dark-mode', 'dark');
        } else {
          document.body.removeAttribute('data-dark-mode');
        }
      }
    }

    localStorage.setItem('theme', theme);
  }

  function setTheme(theme) {
    const metaThemeColor = document.getElementById('themeColor');
    updateStorageAndElements(theme);
    if (metaThemeColor) {
      const isDark = document.body.getAttribute('data-dark-mode');
      metaThemeColor.content = isDark ? '#121212' : '#eceff4';
    }
  }

  this.setTheme = setTheme;
}

export default Themer;