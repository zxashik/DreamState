import React from "react";
export default function IndexPage() {
  return (
    <>
      <div className="mx-auto container pb-16 lg:px-0 px-4 lg:mt-24">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-2xl lg:text-6xl uppercase leading-normal font-bold tracking-wide text-color-heading text-center">
            What we Do?
          </h1>
          <p className="lg:text-2xl text-xl font-normal tracking-tight leading-9 py-3 lg:w-1/2 text-color-para text-center">
            we provide our customers with valued services and solutions using
            our expertise in designing consultancy, supply, and products.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col items-center flex-wrap lg:justify-between items-center lg:mt-20">
          <div className="md:p-8 p-4 lg:w-3/12 w-full shadow-xl hover:shadow-2xl lg:my-0 my-8 bg-white cursor-pointer">
            <h3 className="md:text-5xl text-3xl leading-3rem">Construction</h3>
            <p className="md:text-2xl text-base leading-9 text-color-para pt-8">
              DreamState construction has been in construction industry for
              years as It understands the needs of modern housing in our
              society.
            </p>
          </div>
          <div className="md:p-8 p-4 lg:w-3/12 w-full shadow-xl  hover:shadow-2xl lg:my-0 my-8 bg-white cursor-pointer">
            <h3 className="md:text-5xl text-3xl leading-3rem">Supply</h3>
            <p className="md:text-2xl text-base leading-9 text-color-para pt-8">
              DreamState construction is also known for raw material supply in
              construction industry of Bangladesh, we provide all kinds of raw
              material for our customers and government projects.
            </p>
          </div>
          <div className="md:p-8 p-4 lg:w-3/12 w-full shadow-xl  hover:shadow-2xl lg:my-0 my-8 bg-white cursor-pointer">
            <h3 className="md:text-5xl text-3xl leading-3rem">Interior</h3>
            <p className="md:text-2xl text-base leading-9 text-color-para pt-8">
              We design both commercial and home space interior for our valued
              clients. Our interior designer is highly trained to understand
              customer needs and fulfill it. We make your home/office
              environment delight full.
            </p>
          </div>
        </div>
      </div>

      <style>
        {` .text-color-para {
                color: #636363;
            }
            .text-color-heading {
                color: #334048;
            }
            .f-f-l {
                font-family: "Roboto", sans-serif;
            }
            .f-f-d-s {
                font-family: "DM Serif Display", serif;
            }
            .font-lato {
                font-family: "Lato", sans-serif;
            }`}
      </style>
    </>
  );
}
