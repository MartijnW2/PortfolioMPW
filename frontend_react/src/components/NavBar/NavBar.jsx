import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './NavBar.scss';

const sections = ['home', 'about', 'skills', 'testimonial', 'contact'];

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Find the current active section by checking offsetTop of each section id
      let currentSection = active;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            currentSection = section;
          }
        }
      }

      if (currentSection !== active) {
        setActive(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [active]);

  return (
    <nav className='app__navbar'>
      <ul className='app__navbar-links'>
        {sections.map((item) => (
          <li className='app__flex' key={`link-${item}`}>
            <div />
            <a
              href={`#${item}`}
              className={active === item ? 'active' : ''}
              onClick={() => setToggle(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {sections.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className={active === item ? 'active' : ''}
                    onClick={() => setToggle(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
