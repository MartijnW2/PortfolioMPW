import React from 'react'

export const NavigationDots = ({active}) => {
  return (
    <div className = "app__navigation">
        {['home', 'about', 'skills', 'testimonial', 'contact'].map((item, index) => (
            <a
            href={`#${item}`}
            key={item + index}
            className='app__navigation-dot'
            style={active === item ? {backgroundColor: '#313BAC'} : {}}
            >
            {/* {item} */}
            </a>
        ))}
    </div>
  )
}

export default NavigationDots