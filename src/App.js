import "./App.css";
import { Routes, Route } from "react-router-dom";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import Navbar from "./components/navBar";
import Home from "./containers/home";
import About from "./containers/about";
import Portfolio from "./containers/portfolio";
import Resume from "./containers/resume";
import Contact from "./containers/contact";
import Skills from "./containers/skills";
import Options from "./utils.js/particles";

const App = () => {
  const handleInit = async (engine) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  };

  return (
    <div className="App">
      {/*particles js*/}
      <Particles id="tsparticles" init={handleInit} options={Options} />
      {/* navbar */}
      <Navbar />

      {/*page content */}
      <div className="App_main-page-content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
