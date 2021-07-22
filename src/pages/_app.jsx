import "src/styles/globals.css";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import { ApiTest } from "src/components/ApiTest";
import { PageHead } from "src/components/PageHead";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <PageHead />
      <Header />
      <ApiTest />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
