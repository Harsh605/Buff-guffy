import React from 'react'
import Navbar from './Navbar'
import HomeHero from './HomeHero'
import "./Home.css"
import EcoSystem from './EcoSystem'
import Tokenomics from './Tokenomics'
import HowToBuy from './HowToBuy'
import FAQPresale from './Faq1'
import Footer from './Footer'
import Roadmap from './Roadmap'
import Newsletter from './Newsletter'
import HomeCta from './HomeCta'
import Topbar from './Topbar'
import TokenIntro from './TokenIntro'
import ContactForm from './ContactForm'

const Home = () => {
  return (
    <>
    <div className='background-home'>
    <Topbar/>
    <Navbar/>
    <HomeHero/>
    {/* <EcoSystem/> */}
    <TokenIntro/>
    <Tokenomics/>
    <Newsletter/>
    
    <HowToBuy/>
    <Roadmap/>
    <HomeCta/>
    <ContactForm/>
    {/* <FAQPresale/> */}
    <Footer/>
    
    </div>
    
    </>
    

  )
}

export default Home