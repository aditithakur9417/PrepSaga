import { wrapper } from "../store";
import '../styles/Mobile/globals.css';
import '../styles/Web/globals.css';
//global styles

function MyApp({ Component, pageProps }) {
  return( 
  <Component {...pageProps} />
  )
}

export default wrapper.withRedux(MyApp);
