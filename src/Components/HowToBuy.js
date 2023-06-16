import React from 'react';

const HowToBuy = () => {
    return (
        <section className="page-how-to-buy container content-box" id="how-to-buy">
            <div className="box">
                <div className="box-inner flex gap-5">
                    <div className="w-[50%] p-3">
                        <h2 className='text-[#f1552c] mb-5 text-center'>

                            HOW TO BUY
                        </h2>
                        <p className='text-[#ffffff] fs-5' style={{lineHeight:"30px"}}>
                            To invest in DeFi, first, get the tokens you need from Binance Smart Chain. You will need BNB (BEP20) to be
                            able to buy. Then you need a wallet with a dapp browser to be able to trade tokens in Falcon Swaps. Wallets
                            endorsed are Trust Wallet for mobile and Metamask for desktop. Once you have the tokens and the wallet, you
                            can venture safely into the Falcon Swaps ecosystem.
                        </p>
                    </div>
                    <div className="w-[50%] p-3">
                        <h3 className="text-[#fcd227] fs-5 text-center mb-5">QUICK START GUIDE</h3>
                        <ol className="steps">
                            <li className="step">
                                <h4 className='text-[#f1552c]'>Create MetaMask wallet</h4>
                                <p className="text-[#ffffff] fs-6">Register on Mata Mask Wallet through app or browser</p>
                            </li>
                            <li className="step">
                                <h4 className='text-[#f1552c]'>Send BUSD to your wallet</h4>
                                <p className="text-[#ffffff] fs-6"> Add BUSD to your Metamask Wallet</p>
                            </li>
                            <li className="step">
                                <h4 className='text-[#f1552c]'>Connect your wallet to Pancakeswap</h4>
                                <p  className="text-[#ffffff] fs-6">Browse your Metamask wallet and connect it with Pancakeswap.finance</p>
                            </li>
                            <li className="step">
                                <h4 className='text-[#f1552c]'>Swap BUSD for Falcon</h4>
                                <p  className="text-[#ffffff] fs-6 " >
                                    Now go to trade and exchange BUSD to $FLNS
                                    <br />
                                    You will get LP tokens through staking FLNS / BUSD tokens in Liquidity Pools. Stake $FLNS / BUSD pair to
                                    earn tokens in Pancake Swap
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HowToBuy;
