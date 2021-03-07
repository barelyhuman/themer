import '../styles/globals.css';
import '../styles/new-moon.css';
import feather from 'feather-icons';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    feather.replace({
      height: '14px',
      width: '14px',
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
