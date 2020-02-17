import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hero_slider from "./component/hero_slider";
import Service from "./component/services";
import Portfolio from "./component/portfolio";
import Default_section from "./component/Default_section";
import Twitter from "./component/twitter";
import Who_about from "./component/who_about";
import Testimonal from "./component/testimonal";
import Footer from "./component/footer";
import Contact from "./component/contact";

function App() {
  return (
    <div className="App">
      <Hero_slider/>
      <Service/>
      <Portfolio/>
      <Default_section/>
      <Twitter/>
      <Who_about/>
      <Testimonal/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
