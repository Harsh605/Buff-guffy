import React from 'react'

const EcoSystem = () => {
    return (
        <section className="page-ecosystem container content-box mt-5" id="ecosystem">

            <div className="box ">
                <div className="box-inner">

                    <hr />
                    <p style={{ textAlign: 'center', color: "#ffffff"}}>
                        BUFF GOOFY  Swaps Token is the core token that powers the BUFF GOOFY  Swaps ecosystem.
                        <br />
                        Earn BUFF GOOFY  Swaps Token from Trade Mining, Yield Farms, and BUFF GOOFY  Pools, buy it on the exchange, then explore its use cases:
                    </p>
                    <ul className="mx-auto d-flex " style={{ color: "#ffffff", flexDirection: "column", alignItems: "center" }}>
                        <li>Stake it in BUFF GOOFY  Pools to earn free tokens</li>
                        <li>Use it in Yield Farms to earn more BUFF GOOFY </li>
                        <li>Vote in Nest to help projects win growth fund</li>
                    </ul>
                    <div className="bsc-image d-flex" style={{ flexDirection: "column", alignItems: "center" }}>
                        <img
                            loading="lazy"
                            className="alignnone size-full wp-image-121 aligncenter"
                            src="https://falconswaps.com/wp-content/uploads/2021/08/bsc.png"
                            alt=""
                            width="546"
                            height="216"
                            srcSet="https://falconswaps.com/wp-content/uploads/2021/08/bsc.png 546w, https://falconswaps.com/wp-content/uploads/2021/08/bsc-300x119.png 300w"
                            sizes="(max-width: 546px) 100vw, 546px"
                        />
                        <h4 className="" style={{ textAlign: 'center', color: "#fcd227 " }}>
                            Liquidity Locked to Binance Smart Chain
                        </h4>
                    </div>
                </div>
            </div>
            <p></p>

        </section>
    )
}

export default EcoSystem