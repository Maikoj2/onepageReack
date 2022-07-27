import React from 'react'
import { Banner } from './components/Banner'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'

import NavItem from './components/NavItem'
import ScrollToTop from './components/ScrollToTop'
import { Skill } from './components/Skill'



const OnepageApp = () => {
    return (
        <>

            <NavItem />
            <Banner/>
            <Skill/>
            <Experience/>
            <Contact/>
            <Footer/>


        </>
    )
}

export default OnepageApp