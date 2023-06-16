import React from 'react'
import police from "../police.jpg"

const TokenIntro = () => {
  return (
    <div className="abc bg-transparent py-3 px-14 md:pt-24 md:px-28 sm:p-14  pb-0">

    <h1
        className="bigHeading p-10 font-semibold xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-white lg:leading-[2.5rem] 2xl:leading-[3.7rem]"
        style={{ textAlign:"center"}}
    >
        <span className="text-[#ff0000] -translate-x-2/4">
            {" "}
            Token Intro{" "}
        </span>
    </h1>
    <div className="container my-5 mx-auto md:px-6">
      <section className="mb-32">
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
            <div className="flex h-full items-center rounded-lg bg-transparent p-6 text-center text-[#4361EE] lg:pl-12 lg:text-left" style={{background:"transparent",border:"1px solid #4361EE" }}>
              <div className="lg:pl-12">
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid max-w-2xl mx-auto">
        <div className="flex">
          <div className="flex flex-col items-center mr-6">
            <div className="w-px h-10 opacity-0 sm:h-full" />
            <div>
              <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                1
              </div>
            </div>
            <div className="w-px h-full bg-gray-300" />
          </div>
          <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
            <div>
              <p className="text-md text-white">
              Buff Goofy Is A Gold Smuggler Who Escaped From The Prison, And Now Cops Want Him Dead Or Alive.
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center mr-6">
            <div className="w-px h-10 bg-gray-300 sm:h-full" />
            <div>
              <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                2
              </div>
            </div>
            <div className="w-px h-full bg-gray-300" />
          </div>
          <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
            
            <div>
              
              <p className="text-md text-white">
              Help Buffy Goofy find more gold and avoid the cops in our next P2E game, "CATCH THAT GOOFY"

              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center mr-6">
            <div className="w-px h-10 bg-gray-300 sm:h-full" />
            <div>
              <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                3
              </div>
            </div>
            <div className="w-px h-full opacity-0" />
          </div>
          <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
            
            <div>
              <p className="text-md text-white">
              The More Gold Buff Goofy Smuggles, The More Rewards You Will Get In The Form Of Buff Goofy Tokens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
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