import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <div className="font-objektiv">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="preconnect"
          href="https://use.typekit.net"
          crossOrigin="anonymous"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:image" content="/house58.png" />
        <meta property="og:type" content="website" />
        <meta name="publisher" content="https://house58.nl/" />
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
