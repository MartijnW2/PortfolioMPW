import React from 'react'
import {NavigationDots, SocialMedia} from '../components'

export const AppWrap = (Component, idName, classnames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classnames}`}>
        <SocialMedia />
        <div className = "app__wrapper app__flex">
          <Component />
        </div>
        <NavigationDots/>
    </div>
  )
}

export default AppWrap
