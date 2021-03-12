import feather from 'feather-icons';

function Themer({ trigger = '', metaTagId = 'themeColor' } = {}) {
  // Config init and variable initializations
  let triggerElement = trigger;
  let defaultState = localStorage.getItem('theme') || 'system';

  // Methods Invocations
  triggerElement = normalizeTrigger(triggerElement);
  setTheme(defaultState);
  setupPreferenceListeners();

  // Scoped functions
  function normalizeTrigger(elm) {
    let trigger = elm || false;
	  if(trigger){

		if(typeof trigger === 'string'){
			trigger = document.querySelector(trigger);
		}

		  if(trigger instanceof HTMLElement){
			trigger.addEventListener('click',()=>{
				const theme = getNextTheme();
				setTheme(theme);
			});
		  }

		 
	  }
    return trigger;
  }

  function setTheme(theme) {
    const metaThemeColor = document.getElementById(metaTagId);
    updateStorageAndElements(theme);
    if (metaThemeColor) {
      const isDark = document.body.getAttribute('data-dark-mode');
      metaThemeColor.content = isDark ? '#121212' : '#eceff4';
    }
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
    if (triggerElement) {
      const iconSVG = getIcon(theme);
      triggerElement.innerHTML = iconSVG;
    }

    switch (theme) {
      case 'light': {
        document.body.removeAttribute('data-dark-mode');
        break;
      }
      case 'dark': {
        document.body.setAttribute('data-dark-mode', 'dark');
        break;
      }
      case 'system': {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.body.setAttribute('data-dark-mode', 'dark');
        } else {
          document.body.removeAttribute('data-dark-mode');
        }
        break;
      }
    }

    localStorage.setItem('theme', theme);
  }

  function setupPreferenceListeners() {
    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );
    darkModeMediaQuery.addEventListener('change', handlePrefsChange);
  }

  function handlePrefsChange(e) {
    const isSupportSystem = localStorage.getItem('theme') === 'system';

    if (!isSupportSystem) {
      return;
    }

    const metaThemeColor = document.getElementById(metaTagId);
    const darkModeOn = e.matches;
    if (darkModeOn) {
      document.body.setAttribute('data-dark-mode', 'dark');
    } else {
      document.body.removeAttribute('data-dark-mode');
    }
    if (metaThemeColor) {
      metaThemeColor.content = darkModeOn ? '#121212' : '#eceff4';
    }
  }

  //  Exposed functions
  this.setTheme = setTheme;
}

export default Themer;
