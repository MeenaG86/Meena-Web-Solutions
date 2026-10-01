import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import WhyChooseMe from "./components/WhyChooseMe";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Pricing/>
        <Portfolio />
        <About />
        <WhyChooseMe />
        <Process />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;