import React from 'react';

const HomeCta = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
            <div className="flex lg:py-12">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/people/033.jpg"
                className="w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px] z-[10]"
                alt="image"
              />
            </div>
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex h-full items-center rounded-lg bg-transparent p-6 text-center text-[#4361EE] lg:pl-12 lg:text-left" style={{background:"transparent",border:"1px solid #4361EE" }}>
              <div className="lg:pl-12">
                <h2 className="mb-6 text-3xl font-bold">
                  What are you waiting for?
                </h2>
                <p className="mb-6 pb-2 lg:pb-0 text-[#ffffff]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Maxime, sint, repellat vel quo quisquam accusamus in qui at
                  ipsa enim quibusdam illo laboriosam omnis. Labore itaque
                  illum distinctio eum neque!
                </p>
                <button
                  type="button"
                  style={{border:"1px solid #4361EE"}}
                  className="rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-[#4361EE] hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Connect Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCta;
