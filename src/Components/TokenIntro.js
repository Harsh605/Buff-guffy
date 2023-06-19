import React from 'react'
import police from "../police.jpg"

const TokenIntro = () => {
  return (
    <div className="abc bg-transparent md:mt-10 py-3 px-3 md:px-14 md:pt-24 md:px-28 sm:p-14  pb-0">

      <h2 className='mt-5 mb-5 md:mb-10' style={{ textAlign: 'center', color: "#f1552c", fontWeight: "700" }}>OUR PROJECT &amp; ECOSYSTEM</h2>
      <div className="container sm:my-0 mx-auto md:px-6">
        <section className="sm:mb-0">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
              <div className="flex lg:py-12">
                <img
                  src="https://img.freepik.com/free-vector/police-pursue-catch-thief-holding-bag-money-illustration_33070-5721.jpg?size=626&ext=jpg"
                  className="w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px] z-[10]"
                  alt="image"
                />
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div className="flex h-full items-center rounded-lg bg-transparent p-6 text-center text-[#4361EE] lg:pl-12 lg:text-left" style={{ background: "transparent", border: "1px solid #4361EE" }}>
                <div className="lg:pl-12">
                  <p style={{fontFamily:"revert"}} className='text-lg text-white'>Buff Goofy Is A Gold Smuggler Who Escaped From The Prison, And Now Cops Want Him Dead Or Alive.
                    Help Buffy Goofy Find More Gold And Avoid The Cops In Our Next P2e Game, "Catch That Goofy"
                    The More Gold Buff Goofy Smuggles, The More Rewards You Will Get In The Form Of Buff Goofy Tokens.</p> <br />
                  <p style={{fontFamily:"revert"}} className='text-lg text-white'>From meme to a leading utility project, Our vision is simple - to create a platform that puts gamers and BUFF GOOFY holders first, providing a unique gaming experience and exciting rewards.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}

export default TokenIntro