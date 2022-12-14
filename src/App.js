import "./App.css";
import About from "./Components/About";
import Carousel from "./Components/Carousel";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import GamingPlatform from "./Components/GamingPlatform";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <About />
      <Services />
      <GamingPlatform/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
