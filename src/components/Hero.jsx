import React from "react";
import heroLogo from "../assets/heroLogo.png";

const Hero = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-start bg-palette1-2">
      <div className="md:w-[80%] sm:w-[90%] w-[100%] flex md:flex-row flex-col-reverse h-full justify-center items-center ">
        <div className=" md:w-[50%] w-[100%] md:mt-0 sm:mt-[100px] mt-[50px] md:h-full h-auto flex flex-col justify-center">
          <span className="md:text-5xl text-xl text-palette1-4 sm:px-10 px-5">
            Hello there!👋
          </span>
          <span className="md:text-xl text-sm text-palette1-4 sm:px-10 px-5 py-3">
            We showcase our team's expertise, creativity, and dedication to
            crafting custom solutions that help our clients achieve their online
            goals.
          </span>
          <div className="sm:px-10 px-5 mt-6 sm:z-10 md:z-0 z-10">
            <a href="mailto:work@exsolve.in">
              <button className="bg-palette1-3 md:px-8 sm:px-5 px-3 py-3 rounded-lg hover:rounded-xl mr-5 md:mb-5 sm:mb-5 mb-4">
                Email Us
              </button>
            </a>

            <a
              className="group relative inline-flex items-center overflow-hidden rounded-xl border-[2px] border-palette1-3 md:px-8 px-5 py-3 text-palette1-4 focus:outline-none active:text-palette1-4"
              href="/"
            >
              <span class="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span class="text-sm font-medium transition-all group-hover:mr-4">
                Get Started
              </span>
            </a>
          </div>
        </div>

        {/* image class */}
        <div className="md:w-[50%] w-[100%] flex md:justify-center justify-center item-center">
          <img
            src={heroLogo}
            alt=""
            className="md:w-[400px] md:p-5 p-3 w-[150px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
