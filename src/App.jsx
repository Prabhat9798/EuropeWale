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
    <Hero/>
    <WhyChooseUs/>
    <ServicesSection/>
    <UniversitiesSection/>
    <GoogleReviews/>
    <Footer/>
    </>
  )
}

export default App