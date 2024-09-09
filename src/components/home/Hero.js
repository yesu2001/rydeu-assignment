import React from "react";
import Navbar from "./Navbar";
import heroPic from "../../assets/homepage/heroPic.png";
import ad1 from "../../assets/homepage/ad1.png";
import ad2 from "../../assets/homepage/ad2.png";
import twoArrowIcon from "../../assets/homepage/twoArrowIcon.png";
import calender from "../../assets/homepage/Calander.png";
import passenger from "../../assets/homepage/passenger.png";
import email from "../../assets/homepage/email.png";
import flag from "../../assets/homepage/flag.png";

export default function Hero() {
  return (
    <div>
      <Navbar />
      <div className="flex lg:hidden relative h-40">
        <img src={heroPic} alt="hero pic" className="h-full" />
      </div>
      <div className="w-full lg:absolute z-50 flex lg:py-14 lg:px-20">
        <div className="lg:flex-[0.65] w-full lg:space-y-40 lg:pt-8">
          <HeroText />
          <div className="flex lg:hidden p-2 lg:p-0">
            <SearchCity />
          </div>
          <BookNowAds mode="desktop" />
        </div>
        <div className="hidden lg:flex flex-[0.35]">
          <SearchCity />
        </div>
      </div>
      <div className="hidden lg:flex relative">
        <img src={heroPic} alt="hero pic" className="h-full" />
      </div>
    </div>
  );
}

const HeroText = () => {
  return (
    <div className="z-50 -mt-10 text-white space-y-2 lg:space-y-6 lg:w-3/4">
      <h1 className="hidden lg:flex text-5xl font-bold">
        Private Transfer & Taxi services in Geneva
      </h1>
      <p className="hidden lg:flex text-2xl font-semibold">
        Book airport transfers, city transfers and hourly disposal services with
        driver
      </p>
      <h1 className="w-full text-2xl font-bold lg:hidden text-center">
        Transfers in Peterborough
      </h1>
    </div>
  );
};

const BookNowAds = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-3 lg:gap-6 mb-4 lg:mb-0">
      <img src={ad1} alt="ad1" className="h-44 cursor-pointer" />
      <img src={ad2} alt="ad2" className="h-44 cursor-pointer" />
    </div>
  );
};

const SearchCity = ({ mode }) => {
  return (
    <div className="w-full lg:px-8 mb-6 lg:mb-0">
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="bg-[#F4F4F4] flex gap-2 text-lg p-1">
          <p className="text-center flex-[0.33] bg-white text-[#FF2D5C] font-semibold rounded-md px-2 lg:px-4 py-3">
            One Way
          </p>
          <p className="flex-[0.33] text-center rounded-md px-2 lg:px-4 py-3">
            Round Trip
          </p>
          <p className="flex-[0.33] text-center rounded-md px-2 lg:px-4 py-3">
            Hourly
          </p>
        </div>
        <div className="p-4 lg:py-4 lg:px-8 space-y-5">
          <div className="relative flex flex-col">
            <label className="font-semibold text-stone-600">
              From{" "}
              <span className="text-[#C1C1C1] font-normal">
                (airport, hotel, address)
              </span>
            </label>
            <input
              type="text"
              className="outline-none border-b-2 border-[#EDEDED] -mt-2 bg-transparent"
            />
            <img
              src={twoArrowIcon}
              alt="two ways"
              className="w-7 absolute top-9 right-4"
            />
          </div>
          <div className="flex flex-col ">
            <label className="font-semibold text-stone-600">
              To{" "}
              <span className="text-[#C1C1C1] font-normal">
                (airport, hotel, address)
              </span>
            </label>
            <input
              type="text"
              className="outline-none border-b-2 border-[#EDEDED] -mt-2 bg-transparent"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <img src={calender} alt="calender" className="w-6" />
                <label className="text-[#C1C1C1]">Pickup Date</label>
              </div>
              <input
                type="text"
                className="outline-none border-b-2 border-[#EDEDED] -mt-2 bg-transparent"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <img src={calender} alt="calender" className="w-6" />
                <label className="text-[#C1C1C1]">Pickup Time</label>
              </div>
              <input
                type="text"
                className="outline-none border-b-2 border-[#EDEDED] -mt-2 bg-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-end gap-4">
              <img src={passenger} alt="three ways" className="w-6" />
              <label className="text-[#C1C1C1]">Add Passenger & Baggage</label>
            </div>
            <input
              type="text"
              className="outline-none border-b-2 border-[#EDEDED] -mt-2 bg-transparent"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-end gap-4">
              <img src={email} alt="email" className="w-7" />
              <label className="text-[#C1C1C1]">Email</label>
            </div>
            <input
              type="text"
              className="outline-none border-b-2 border-[#EDEDED] -mt-3 bg-transparent"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex gap-4">
              <img src={flag} alt="three ways" className="w-7" />
              <label className="text-[#C1C1C1]">Phone Number</label>
            </div>
            <input
              type="text"
              className="outline-none border-b-2 border-[#EDEDED] -mt-2 bg-transparent"
            />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label>Additional Requirements</label>
          </div>
        </div>
        <div className="p-2 pt-0">
          <button className="w-full text-center bg-[#FF2D5C] text-white py-3 text-xl font-semibold rounded-md">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
