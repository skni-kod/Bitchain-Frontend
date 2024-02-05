import React from "react";
import { Link } from "react-router-dom";

export default function BottonAdMarkets() {
  return (
    <div className="h-96 lg:h-[600px] w-full flex flex-col sm:flex-row justify-evenly items-center mt-10 sm:mt-0">
      <div className="w-full sm:w-1/2 dark:text-white p-8 sm:pl-16 flex flex-col gap-6 ">
        <p className="font-bold lg:text-3xl xl:text-4xl md:text-xl sm:text-[17px] text-center sm:text-left">
          Sign up and claim starter pack to your crypto learning
          <span className="lg:text-4xl text-main">.</span>
        </p>
        <p className="text-main text-center sm:text-left">1000 USDT for free</p>
        <div className="flex justify-center sm:justify-end mt-3">
          <Link
            to="/signup"
            className="text-sm bg-main py-3 px-5 rounded-lg hover:bg-mainHover transition-colors duration-300 text-white sm:mr-8"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="sm:w-1/2 flex justify-center items-center">
        <img
          className="sm:w-2/5 h-28 sm:h-fit drop-shadow-[0_35px_35px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_35px_35px_rgba(255,255,255,0.15)] lg:ml-16"
          src="/gift.png"
          alt=""
        />
      </div>
    </div>
  );
}
