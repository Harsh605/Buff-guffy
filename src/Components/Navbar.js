import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <header className="banner">
            <div className="container">
                {/* <a className="brand-mobile d-block d-lg-none" >
                    <img src="https://falconswaps.com/wp-content/themes/falconswaps/dist/images/logo.png" alt="Falconswap" width="197" height="195" loading="lazy" />
                </a> */}
                <nav className="nav-primary navbar navbar-expand-lg justify-content-center">
                    <div className="navbar-collapse offcanvas-collapse">
                        <ul id="menu-main" className=" navbar-nav align-items-center justify-content-around w-100">
                            <li id="menu-item-26" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26 nav-item">
                                <a title="Ecosystem" className="nav-link">Ecosystem</a>
                            </li>
                            <li id="menu-item-27" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27 nav-item">
                                <a title="How to Buy" className="nav-link">How to Buy</a>
                            </li>
                            <li id="menu-item-28" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-28 nav-item">
                                <a title="Roadmap" className="nav-link">Roadmap</a>
                            </li>
                            <li id="menu-item-32" className="LOGO menu-item menu-item-type-custom menu-item-object-custom menu-item-32 nav-item">
                                <a href="#" className="nav-link menu-image-title-after menu-image-not-hovered">
                                    <img width="115" height="123" src="https://th.bing.com/th/id/R.4cdf0cc378f7617116d2a5e51b0b5e58?rik=PnEqogG%2fRdS%2bRg&riu=http%3a%2f%2fwww.icons101.com%2ficon_png%2fsize_256%2fid_17710%2fred_man.png&ehk=bBeL31S%2b3c9vY8FfOAfv%2bfCd9FwE4x3A5bIt%2fJc0SUM%3d&risl=&pid=ImgRaw&r=0" className="menu-image menu-image-title-after" alt="" loading="lazy" />
                                    <span className="menu-image-title-after menu-image-title"></span>
                                </a>
                            </li>
                            <li id="menu-item-142" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-142 nav-item">
                                <a title="Binance smart chain" target="_blank" className="nav-link">Ethereum</a>
                            </li>
                            <li id="menu-item-30" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-30 nav-item">
                                <a title="Community" className="nav-link">Community</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <button className="navbar-toggler block p-0 border-0 position-fixed" type="button" data-toggle="offcanvas">
                <i style={{color:"rgb(241, 85, 44)"}} className="fa-solid fa-bars fs-4"></i>
                </button>
            </div>
        </header>
    )
}

export default Navbar