import "@/styles/globals.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

function App({ Component, pageProps }) {
  return (
    <div className="font-objektiv">
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
