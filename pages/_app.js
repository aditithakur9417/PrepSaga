import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import {wrapper} from '../store';
import '../styles/Mobile/globals.css';
import '../styles/Web/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(MyApp);
