import "src/styles/globals.css";
import { Header } from "src/components/Header";
import { Gacha } from "src/components/Gacha";
import { Footer } from "src/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Gacha />
      <Footer />
    </>
  );
}

export default MyApp;
