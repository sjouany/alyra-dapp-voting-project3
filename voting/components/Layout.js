import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import NProgress from "nprogress";

const Layout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", NProgress.start);
    router.events.on("routeChangeComplete", NProgress.done);
    return () => {
      router.events.off("routeChangeStart", NProgress.start);
      router.events.on("routeChangeComplete", NProgress.done);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web3 Voting App"></meta>
        <title>Web3 Voting App, formation Alyra</title>
      </Head>
      <Header />
      {children}
      <Footer/>
    </>
  );
};

export default Layout;
