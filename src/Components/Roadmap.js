import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import G40 from '../Images/Group 40.svg'
import G42 from '../Images/Group 42.svg'
import G39 from '../Images/Group 39.svg'
import G41 from '../Images/Group 41.svg'
import G35 from '../Images/Group 35.svg'
import G43 from '../Images/Group 43.svg'
import G38 from '../Images/Group 38.svg'
import G44 from '../Images/Group 44.svg'
import G36 from '../Images/Group 36.svg'
import G45 from '../Images/Group 45.svg'
import G37 from '../Images/Group 37.svg'
import G47 from '../Images/Group 47.svg'
import G54 from '../Images/Group 54.svg'
import G53 from '../Images/Group 53.svg'
import G52 from '../Images/Group 52.svg'
import G51 from '../Images/Group 51.svg'
import G50 from '../Images/Group 50.svg'
import G49 from '../Images/Group 49.svg'
import G33 from '../Images/Group 33.svg'
import G23 from '../Images/Group 23.svg'
import G22 from '../Images/Group 22.svg'
import G21 from '../Images/Group 21.svg'
import G20 from '../Images/Group 20.svg'
import G19 from '../Images/Group 19.svg'
const Roadmap = () => {


    const [screenSize, getDimension] = useState({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    });
    const setDimension = () => {
      getDimension({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
      })
    }
    
    useEffect(() => {
      window.addEventListener('resize', setDimension);
      
      return(() => {
          window.removeEventListener('resize', setDimension);
      })
    }, [screenSize])
     

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (<div id='roadmap' className='bg-transparent md:py-24  px-14 md:px-28 sm:py-12 sm:overflow-x-hidden'>
    <div className='p-10'>
      {/* <div className="ml-10 w-10 h-1 from-[#7361F2] to-[#BD4FF1] bg-gradient-to-r "></div> */}
      <h1 className="bigHeading text-center font-semibold xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-white lg:leading-[2.5rem] 2xl:leading-[3.7rem]">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#f1552c] to-[#f1552c]">
                {" "}
                RoadMap{" "}
              </span>
            </h1>
            <p className='text-white pt-2 mb-5 text-center'>Learn more about our Vision behind BUFF GOOFY and our Mission towards greatness.</p>
    <br/>
            </div>
    <div>
        <Carousel style={{color:"red"}} responsive={responsive}>
            <div><img src={screenSize.dynamicWidth>=465?G40:G33}  style={{position:"relative",top:"-1px"}} alt="" /></div>
            <div><img src={(screenSize.dynamicWidth>=465)?G42:G49} style={{position:"relative",top:"5px"}} alt="" /></div>
            <div><img src={screenSize.dynamicWidth>=465?G39:G19} alt="" /></div>
            <div><img src={screenSize.dynamicWidth>=465?G41:G50} alt="" /></div>
            <div><img src={screenSize.dynamicWidth>=465?G35:G20} alt="" /></div>
            <div><img src={screenSize.dynamicWidth>=465?G43:G51} alt="" /></div>
            <div><img src={screenSize.dynamicWidth>=465?G38:G22} alt="" /></div>
            <div><img src={screenSize.dynamicWidth>=465?G44:G52} alt="" /></div>
            <div><img src={screenSize.dynamicWidth>=465?G36:G21} alt="" /></div>
            <div><img src={screenSize.dynamicWidth>=465?G45:G53} alt="" /></div>
            <div><img src={screenSize.dynamicWidth>=465?G37:G23} alt="" /></div>
            <div><img src={screenSize.dynamicWidth>=465?G47:G54} alt="" /></div>
        </Carousel>
    </div>
    </div>
  )
}

export default Roadmap