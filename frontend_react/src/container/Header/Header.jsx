import react from 'react';
import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';

const Header = () => {
  return (
    <div className = "app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className = "app__header-info"
        >
          <div className="app__header-badge">
            <div className = "badge-cmp app_flex">
              <span>👋</span>
              <div style={{marginLeft: 20}}>
                <p className = "p-text">Hello, I am</p>
                <h1 className = "head-text">John Doe</h1>
              </div>
            </div>
            <div className='tag-cmp app__flex'>
              <p className = "p-text" style={{marginLeft: 20}}>Frontend Developer</p>
              <p className = "p-text" style={{marginLeft: 20}}>&</p>
              <p className = "p-text" style={{marginLeft: 20}}>Unity Developer</p>
            </div>
          </div>
      </motion.div>
    </div>
  );
};

export default Header;