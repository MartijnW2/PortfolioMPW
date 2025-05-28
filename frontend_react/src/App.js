import React, { useState, useEffect } from "react";

import { About, Footer, Header, Skills, Testimonial } from "./container";    
import { NavBar } from "./components";

import './App.scss';

const MOBILE_MAX_WIDTH = 768;  // max width to consider mobile

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= MOBILE_MAX_WIDTH);
    };

    checkMobile();

    // Optional: listen for window resize to update dynamically
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="mobile-under-construction" style={{ padding: 20, textAlign: 'center' }}>
        <h1>🚧 Mobile Site Under Construction 🚧</h1>
        <p>We're working hard to make the mobile experience great. Please visit us on a desktop or laptop for now!</p>
      </div>
    );
  }

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
