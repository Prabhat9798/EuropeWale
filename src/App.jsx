import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import ServicesSection from './components/Services/ServicesSection'
import UniversitiesSection from './components/University/UniversitiesSection'
import GoogleReviews from './components/Reviews/GoogleReviews'
import Footer from './components/Footer/Footer'

const App = () => {
  return (<>
    <Navbar/>
    <div id="home">
      <Hero/>
    </div>
    <div id="features">
      <WhyChooseUs/>
    </div>
    <div id="services">
      <ServicesSection/>
    </div>
    <UniversitiesSection/>
    <div id="reviews">
      <GoogleReviews/>
    </div>
    <Footer/>
  </>)
}

export default App