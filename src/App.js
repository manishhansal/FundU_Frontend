import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
