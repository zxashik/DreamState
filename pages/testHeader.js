import Svg from "@components/Svg";
import SvgPhone from "@components/SvgPhone";
import Link from "next/link";
import React from "react";

const MainMenu = ({ isMobile }) => {
  const menu = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return menu.map((item) => (
    <li className="flex cursor-pointer text-gray-600 text-sm md:text-xl leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
      <Link href={item.href}>
        <div
          className={`cursor-pointer font-bold ${isMobile ? "ml-2" : "mr-10"}`}
        >
          {item.title}
        </div>
      </Link>
    </li>
  ));
};

function testHeader() {
  const MenuHandler = (flag) => {
    if (flag) {
      document.getElementById("list").classList.add("top-100");
      document.getElementById("list").classList.remove("hidden");
      document.getElementById("close").classList.remove("hidden");
      document.getElementById("open").classList.add("hidden");
    } else {
      document.getElementById("list").classList.remove("top-100");
      document.getElementById("list").classList.add("hidden");
      document.getElementById("close").classList.add("hidden");
      document.getElementById("open").classList.remove("hidden");
    }
  };
  return (
    <div className="px-24 py-24">
      <h1 className=" text-4xl font-bold text-center mb-28">Header test</h1>
      {/* menu div */}

      <div>
        <div className="mx-auto container px-2 lg:px-0 bg-gray-400">
          <nav className="hidden lg:block">
            <div className="flex justify-between items-center py-10 lg:pt-20">
              <div>
                <h1 className=" text-4xl font-mono font-extrabold">
                  DreamState
                </h1>
              </div>
              <div className="flex items-center text-base font-normal text-gray-800">
                {/* menu map here  */}

                <MainMenu />
              </div>
            </div>
          </nav>
          {/* Mobile Responsive */}
          <nav className="lg:hidden">
            <div className="flex py-2 justify-between items-center px-4">
              <div className="cursor-pointer">
                <a href="#">
                  <SvgPhone />
                </a>
              </div>
              <div className="visible flex items-center">
                <ul
                  id="list"
                  className="hidden p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-12 md:mt-12 z-40"
                >
                  {/* mobile menu map here  */}

                  <MainMenu isMobile />
                </ul>
                <div className="xl:hidden">
                  <svg
                    id="open"
                    onClick={() => MenuHandler(true)}
                    aria-haspopup="true"
                    aria-label="Main Menu"
                    xmlns="http://www.w3.org/2000/svg"
                    className="show-m-menu icon icon-tabler icon-tabler-menu"
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={4} y1={8} x2={20} y2={8} />
                    <line x1={4} y1={16} x2={20} y2={16} />
                  </svg>
                  <div
                    id="close"
                    className="hidden close-m-menu"
                    onClick={() => MenuHandler(false)}
                  >
                    <svg
                      aria-label="Close"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* Mobile Responsive */}
        <style>
          {`.text-color-para {
                color: #636363;
            }
            .text-color-heading {
                color: #334048;
            }

            .background-color {
                background: #334048;
            }
            .btn-bg {
                background-color: #202b32;
            }
            .top-100 {
                animation: slideDown 0.5s ease-in-out;
            }
            @keyframes slideDown {
                0% {
                    top: -50%;
                }
                100% {
                    top: 0;
                }
            }
            * {
                outline: none !important;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                -webkit-tap-highlight-color: transparent;
            }.f-f-l {
                font-family: "Roboto", sans-serif;
            }
            .f-f-d-s {
                font-family: "DM Serif Display", serif;
            }
            .font-lato {
                font-family: "Lato", sans-serif;
            }`}
        </style>
      </div>
    </div>
  );
}

export default testHeader;
