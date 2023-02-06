//import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from "next/router";
import Layout from '../components/Layout';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  console.log (Component);

  if(router.pathname === '/login') return <Component {...pageProps} />;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );


  //<Layout>
  //  return <Component {...pageProps} />
  //</Layout>
}
