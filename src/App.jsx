import React from 'react'
import Header from './component/Header'
import FeatureA from './component/FeactureA'
import About from './component/About'
import aboutimages from '../public/images/Frame 19.png'
import aboutimages1 from '../public/images/download.png'
import Presentation from './component/Presentation'
import Contact from './component/Contact'

function App() {
  return (
    <div className='App'>
      <Header />
      <FeatureA />
      <About image={aboutimages} title='comes with all yuo need for daly life' button='Get the App ' />
      <Presentation />
      <About image={aboutimages1} title='Downlode and get The App Now' button='Downlode ' />
      <Contact />
    </div>
  )
}

export default App