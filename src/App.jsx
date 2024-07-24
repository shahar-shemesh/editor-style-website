import { Analytics } from "@vercel/analytics/react";

import Divider from './components/Divider/Divider.jsx';
import About from './components/About/About.jsx';
import Header from './components/Header/Header.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Skills from './components/Skills/Skills.jsx';
import LineNumbers from './components/LineNumbers/LineNumbers.jsx';
import Footer from "./components/Footer/Footer.jsx";

function App() {

  return (
    <div className="App">

      <Header />

      <LineNumbers />

      <Navigation />

      <About />

      <Divider />

      <Skills />

      <Divider />

      <Portfolio />

      <Analytics />

      <Footer />

    </div>
  );
}

export default App;

