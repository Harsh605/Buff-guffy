import React from 'react'

const Topbar = () => {
  return (
    <div className="top-bar">
            <div className="top-bar-left">
                <div className="top-bar-email">
                    <i className=" fa-solid fa-envelope"></i>
                    <a className=" "  target="_blank">contact@buffgoofy.io</a>
                </div>
                {/* <div className="top-bar-contact">
                    <i className="hidden sm:inline fa-sharp fa-solid fa-phone"></i>
                    <a className='hidden sm:inline ' href="tel:+919358593003" target="_blank">+91 987 654 3210</a>
                </div> */}
            </div>
            <div className="top-bar-right sm:flex sm:justify-center sm:mx-0">
                {/* <a href="https://www.facebook.com/MetaBlockTechnologies" className='hidden sm:inline'  target="_blank"><i className="fa-brands fa-facebook"></i></a> */}
                {/* <a href="https://instagram.com/metablocktechnologies1" className='hidden sm:inline'  target="_blank"><i className="fa-brands fa-instagram"></i></a> */}
                <a href="https://t.me/haawkschain" target="_blank"><i className="fa-brands fa-telegram"></i></a>
                <a href="https://www.linkedin.com/company/haawkschain/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://twitter.com/Haawks_chain" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                {/* <a href="https://twitter.com/Metablocktech" className='hidden sm:inline'  target="_blank"><i class="fa-brands fa-discord"></i></a> */}
                {/* <a href="https://twitter.com/Metablocktech" className='hidden sm:inline'  target="_blank"><i class="fa-brands fa-medium"></i></a> */}
                {/* <a href="https://twitter.com/Metablocktech" className='hidden sm:inline'  target="_blank"><i class="fa-brands fa-youtube"></i></a> */}
                


            </div>
        </div>
  )
}

export default Topbar