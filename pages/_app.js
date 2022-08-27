import Layout from "../components/layouts/Layout";
import { useRouter } from "next/router";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  const router = useRouter();

  if (router.asPath == "/") {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
