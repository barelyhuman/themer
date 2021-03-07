import Themer from '@barelyreaper/themer';
import { useEffect, useState } from 'react';

export default function Home() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    initThemer();
  }, []);

  function initThemer() {
    new Themer({ trigger: document.getElementById('toggleTheme') });
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
      <main className="container-bounds">
        <h1>Themer</h1>
        <div>
          <button className="no-border icon" id="toggleTheme"></button>
        </div>
        <br />
        <br />
        <div>
          <button onClick={handleButtonClick} className="secondary">
            Toggle Dark/Light
          </button>
        </div>
      </main>
    </>
  );
}
