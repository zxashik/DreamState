import React from "react";

function feature1() {
  return (
    <div classname="bg-gray-200 overflow-y-hidden">
      <section className="px-6 flex justify-center items-center  xl:px-20">
        <div className="2xl:container 2xl:mx-auto py-12">
          <div
            role="contentinfo"
            className="flex flex-col items-center justify-center w-full pt-10 pb-12 md:pb-20 lg:pb-24"
          >
            <h1
              tabIndex={0}
              className="focus:outline-none leading-9 font-extrabold text-gray-800 text-3xl md:text-4xl"
            >
              Our Services
            </h1>
            <hr className="w-24 h-1.5 mt-2 bg-indigo-700 " />
          </div>
          <div
            tabIndex={0}
            aria-label="group of cards"
            className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-16 justify-items-center"
          >
            <div
              tabIndex={0}
              aria-label="card 1"
              className="w-72 group focus:outline-none "
            >
              <div className="group-hover:shadow-xl cursor-pointer transition duration-300 ease-in-out bg-white flex justify-center items-center flex-col border border-gray-200 rounded-md p-8">
                <img
                  tabIndex={0}
                  alt="pill"
                  className="focus:outline-none mb-4"
                  src="https://i.ibb.co/X8m7N7j/undraw-factory-dy0a.png"
                />
                <h2
                  tabIndex={0}
                  className="focus:outline-none text-2xl font-bold mb-6 text-indigo-700 text-center lg:text-left"
                >
                  Construction
                </h2>
                <p
                  tabIndex={0}
                  className="focus:outline-none  mb-6 text-center"
                >
                  {" "}
                  DreamState construction a company that creates your dream
                  house.
                </p>
                {/* <a
                  href="javascript:void(0)"
                  className="hover:underline focus:outline-none focus:text-indigo-400  text-indigo-700 focus:underline cursor-pointer"
                >
                  View more
                </a> */}
              </div>
            </div>
            <div className="group py-8 lg:py-0">
              <div
                tabIndex={0}
                aria-label="card 2"
                className="w-72 group-hover:shadow-xl cursor-pointer transition duration-300 ease-in-out  focus:outline-none bg-indigo-700 shadow-lg text-white flex justify-center items-center flex-col border border-gray-200 rounded-md p-8"
              >
                <img
                  tabIndex={0}
                  alt="heart"
                  className="focus:outline-none mb-4"
                  src="https://i.ibb.co/vxF3Cxd/output-onlinepngtools.png"
                />
                <h2
                  tabIndex={0}
                  className="focus:outline-none text-2xl font-bold mb-6 text-white text-center lg:text-left"
                >
                  Supply
                </h2>
                <p
                  tabIndex={0}
                  className="focus:outline-none  mb-6 text-center text-white"
                >
                  We supply all kinds of Raw material and machinery for
                  construction
                </p>
                {/* <a
                  href="javascript:void(0)"
                  className="hover:underline focus:outline-none focus:text-indigo-200  text-white focus:underline cursor-pointer"
                >
                  View more
                </a> */}
              </div>
            </div>
            <div className="group">
              <div
                tabIndex={0}
                aria-label="card 3"
                className="w-72 group-hover:shadow-xl cursor-pointer transition duration-300 ease-in-out focus:outline-none bg-white flex justify-center items-center flex-col border border-gray-200 rounded-md p-8"
              >
                <img
                  tabIndex={0}
                  alt="ambulance"
                  className="focus:outline-none mb-4"
                  src="https://i.ibb.co/ZSDcmks/undraw-under-construction-46pa.png"
                />
                <h2
                  tabIndex={0}
                  className="focus:outline-none text-2xl font-bold mb-6 text-indigo-700 text-center lg:text-left"
                >
                  Interior
                </h2>
                <p
                  tabIndex={0}
                  className="focus:outline-none  mb-6 text-center"
                >
                  We design your house/office and create delightful environment
                </p>
                {/* <a
                  href="javascript:void(0)"
                  className="hover:underline focus:outline-none focus:text-indigo-400  text-indigo-700 focus:underline cursor-pointer"
                >
                  View more
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default feature1;
