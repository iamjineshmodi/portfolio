import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import Work from "./components/Work";
import GithubStats from "./components/GithubStats";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Work />
      <Portfolio />
      <GithubStats />
      <Languages />
      <Contact />
      <SocialLinks />
    </div>
  );
};

export default App;