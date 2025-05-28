import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // fixed import
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';

const testimonialVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await client.fetch('*[_type == "testimonials"]');
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  if (testimonials.length === 0) return null;

  const { name, company, feedback, contact, imgUrl } = testimonials[currentIndex];

  return (
    <section className="app__testimonial section__padding" aria-label="Testimonials">
      <div className="app__testimonial-item app__flex">
        <AnimatePresence mode="wait" initial={false}>
<motion.div
  key={currentIndex}
  className="app__testimonial-content"
  variants={testimonialVariants}
  initial="initial"
  animate="animate"
  exit="exit"
  transition={{ duration: 0.6, ease: 'easeInOut' }}
>
  {imgUrl ? (
    <img
      src={urlFor(imgUrl)}
      alt={`Photo of ${name}`}
      className="app__testimonial-img"
    />
  ) : (
    <div className="testimonial__wrapper">
      <div className="testimonial__feedback">
        <p>{feedback}</p>
      </div>

      <div className="testimonial__footer">
        <h4 className="testimonial__name">{name}</h4>
        <h5 className="testimonial__company">{company}</h5>
        {contact && <p className="testimonial__contact">{contact}</p>}
      </div>
    </div>
  )}
</motion.div>
        </AnimatePresence>
      </div>

      <div className="app__testimonial-btns app__flex" role="group" aria-label="Testimonial navigation">
        <button
          type="button"
          className="testimonial__btn"
          onClick={handlePrev}
          aria-label="Previous testimonial"
        >
          <HiChevronLeft size={28} />
        </button>
        <button
          type="button"
          className="testimonial__btn"
          onClick={handleNext}
          aria-label="Next testimonial"
        >
          <HiChevronRight size={28} />
        </button>
      </div>
    </section>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonials'),
  'testimonial',
  'app_primarybg',
  'All these are real testimonials from real people. Feel free to reach out to them.'
);
