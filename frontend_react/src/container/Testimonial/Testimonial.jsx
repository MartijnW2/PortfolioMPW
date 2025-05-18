import React, {useState, useEffect} from 'react';
import motion from 'framer-motion';
import './Testimonial.scss';
import {HiChevronRight, HiChevronLeft} from 'react-icons/hi';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';


const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type == "brands"]';
    client.fetch(query)
      .then((data) => setBrands(data));

    const query2 = '*[_type == "testimonials"]';
    client.fetch(query2)
      .then((data) => setTestimonials(data));
  } , []);
return (
  <div>
    {testimonials.length > 0 && (
      <>
        <div className="app__testimonial-item app__flex">
          {testimonials[currentIndex].imgUrl ? (
            <img src={urlFor(testimonials[currentIndex].imgUrl)} alt="testimonial" />
          ) : (
            <>
              <p>{testimonials[currentIndex].company}</p>
              <p>{testimonials[currentIndex].feedback}</p>
            </>
          )}
        </div>
      </>
    )}
  </div>
);
};

export default AppWrap(MotionWrap(Testimonial, 'app__testimonials'), 'testimonials', 'app_primarybg');