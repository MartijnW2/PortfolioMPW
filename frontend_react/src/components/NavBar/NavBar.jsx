import React from 'react';
import { useState } from 'react';
import { images } from '../../constants';
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import { motion } from 'framer-motion';

import './NavBar.scss';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'> 
      {/* <div className='app__navbar-logo'>
        <img src = {images.logo}></img>
      </div> */}
      <ul className='app__navbar-links'>
        {['Home', 'About', 'Skills', 'Testimonial', 'Contact'].map((item) => (
          <li className='app__flex' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)}/>

            {toggle && (
                <motion.div
                    whileInView={{ x: [300, 0] }}
                    transition={{ duration: 0.85, ease: 'easeOut' }}
                >
                <HiX onClick={() => setToggle(false)}/>
                    <ul>
                        {['Home', 'About', 'Skills', 'Testimonial', 'Contact'].map((item) => (
                        <li key={{item}}>
                            <a href={`#${item}`} onClick={() => setToggle(false)}>                    
                                {item}
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