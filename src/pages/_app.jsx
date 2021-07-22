import "src/styles/globals.css";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import Link from "next/link";
import { ApiTest } from "src/components/ApiTest";
import { PageHead } from "src/components/PageHead";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PageHead />
      <Header />
      <ApiTest />
      <Component {...pageProps} />
      <div className="text-center space-x-4">
        <Link href="/">
          <a className="bg-cyan-300 p-2 rounded-xl">React ver.</a>
        </Link>
        <Link href="/JSver">
          <a className="bg-cyan-300 p-2 rounded-xl">JS ver.</a>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
