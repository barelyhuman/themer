import Head from 'next/head';
import Themer from '@barelyreaper/themer';
import { useEffect, useState } from 'react';

export default function Home() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    initThemer();
  }, []);

  function initThemer() {
    new Themer({ trigger: document.querySelector('#toggleIt') });
  }

  const handleButtonClick = () => {
    const themer = new Themer();
    if (theme !== 'light') {
      themer.setTheme('light');
      setTheme('light');
    } else {
      themer.setTheme('dark');
      setTheme('dark');
    }
  };

  return (
    <>
      <main class="container-bounds">
        <h1>Themer</h1>
        <div>
          <button class="no-border icon" id="toggleTheme"></button>
        </div>
        <br />
        <br />
        <div>
          <button onClick={handleButtonClick} class="secondary">
            Toggle Dark/Light
          </button>
        </div>
      </main>
    </>
  );
}
