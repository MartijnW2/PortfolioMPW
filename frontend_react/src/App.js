import React from "react";

import { About, Footer, Header, Skills, Testimonial } from "./container";    
import { NavBar } from "./components";

import './App.scss';

const App = () => {
  return (
    <div className="app_wrapper"> 
        <NavBar/>
        <Header/>
        <About/>
        <Skills/>
        <Testimonial/>
        <Footer/>
    </div>
  );
}
export default App;