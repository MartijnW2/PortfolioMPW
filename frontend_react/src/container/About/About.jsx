import React, {useState, useEffect, use} from 'react';
import './About.scss';

import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

const About = () => {

const [abouts, setAbouts] = useState([]);

useEffect(() => {
  const query = '*[_type == "about"]';
  console.log(client);

  client.fetch(query)
  .then((data) => setAbouts(data))
  console.log("abouts: ", abouts);
  }, [])

  return (
    <>
      <h2 className="head-text">Software should feel as intuitive as flipping a switch — simple on the outside, powerful underneath</h2>
      <div className='app__profiles'>
        {console.log(abouts)}
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src ={urlFor(about.profilepicture)} alt = {about.title}></img>
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about.summary}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, 'about', "", "I you want to check out the codebase, the link to my github is on the left of the every section.");
// export default AppWrap(MotionWrap(About, 'app_about'), 'about', 'app__whitebg');