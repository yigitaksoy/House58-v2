import Head from "next/head";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function App({ Component, pageProps }) {
  return (
    <div className="font-objektiv">
      <Head>
        <link rel="icon" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" sizes="32x32" href="/favicon-32x32.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="preconnect"
          href="https://use.typekit.net"
          crossOrigin="anonymous"
        />
      </Head>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="relative isolate flex w-full flex-col bg-house-black lg:overflow-visible overflow-hidden">
        <Component {...pageProps} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
