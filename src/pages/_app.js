import '../assets/styles/globals.css'
import SvgSprite from '../assets/images/sprite';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <SvgSprite />
    </>
  );
}

export default MyApp
