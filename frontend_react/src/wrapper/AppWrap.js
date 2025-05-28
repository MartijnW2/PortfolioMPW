import React from 'react'
import { NavigationDots, SocialMedia } from '../components'
import QuoteBar from '../components/QuoteBar'

export const AppWrap = (Component, idName, classnames, quote) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classnames}`} style={{ position: 'relative' }}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
          <QuoteBar text={quote} />
        </div>
        <NavigationDots/>
    </div>
  )
}
export default AppWrap