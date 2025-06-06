import react from 'react';
import './Header.scss';
import { motion, scale } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

const scaleVarients = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

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
                <h1 className = "head-text">Martijn Peter Wolffenbuttel</h1>
              </div>
            </div>
            <div className='tag-cmp app__flex'>
              <p className = "p-text" style={{marginLeft: 20}}>Frontend Developer</p>
              <p className = "p-text" style={{marginLeft: 20}}>Unity Developer</p>
              <p className = "p-text" style={{marginLeft: 20}}>Freelancer</p>
            </div>
          </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
        className = "app__header-img"
      >
        <motion.img
          src={ images.profilePicture2}
          alt="profile.bg"
          whileInView={{ scale: [0, 1.5] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='profile-img'
        />
        {/* <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"
        /> */}
      </motion.div>      
      
      <motion.div
        variant={scaleVarients}
        whileInView={scaleVarients.whileInView}
        className = "app__header-circles"
      >
        {[images.unity, images.react, images.scrum].map((circle, index) => (
          <div className = "circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle"/>
          </div>
        ))}
      </motion.div>

    </div>
  );
};

export default AppWrap(
  Header,
  "home",
  "",
  "Did you know that this entire portfolio is created using React and JavaScript?"
);