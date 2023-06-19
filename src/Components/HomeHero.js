import React from 'react'
import "./Hero.css"
import ConnectBtn from './ConnectBtn'
import WagmiUtils from '../Blockchain/WagmiUtils'

const HomeHero = () => {
  return (
    <section className="page-frontpage container content-box mt-5 pl-2 pr-2">
      <div className="box box-small ">
        <div className="box-inner">
          <h1 style={{ textAlign: 'center',color:"#ffffff" }}>A Decentralized Meme Token<br />Evolved into a Vibrant Ecosystem</h1>
        </div>
      </div>

      <p>&nbsp;</p>

      <div className="container flex flex-wrap justify-center">
        {/* <p className="text-large" style={{ textAlign: 'center',color:"#ffffff",fontSize:"18px" }}>
          New generation AMM DEX for existing and new projects on Binance Smart Chain (BSC), offering the best trading experience and better project support.
        </p> */}
        <p>&nbsp;</p>
        <p className='' style={{flexWrap:"wrap", textAlign: 'center',display:"flex",justifyContent:"center",gap:"10px",marginBottom:"10px" }}>
          <a className="btn btn-primary bg-transparent border-4  border-color-custom"style={{borderColor: "#f1552c"}}>Connect to Wallet</a>
          {/* <WagmiUtils compo={<ConnectBtn />}/> */}
          <a className="btn btn-primary bg-transparent border-4  border-color-custom" style={{borderColor: "#f1552c"}}>Buy Now</a>
        </p>
      </div>
    </section>
  )
}

export default HomeHero