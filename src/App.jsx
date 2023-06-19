import React from 'react'
import Nav from './components/Nav'
import Services from './components/Services'
import Landing from './components/Landing'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contacts from './components/Contacts'
import AboutUs from './components/AboutUs'
import './index.css'

const App = () => {
    return (
        <>
            <Nav />
            <Landing />
            <Services />
            <Gallery />
            <AboutUs />
            <Testimonials />
            <Contacts />
        </>
    )
}

export default App