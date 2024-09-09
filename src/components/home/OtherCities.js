import React from "react";
import napplesCity from "../../assets/homepage/Napples.png";
import florenceCity from "../../assets/homepage/Florance.png";

export default function OtherCities() {
  return (
    <div className="p-8 space-y-4 my-4">
      <h1 className="text-[#484848] text-2xl lg:text-4xl font-bold">
        Other cities
      </h1>
      <div className="grid gap-2 grid-cols-2 grid-rows-3 lg:grid-cols-4 lg:gap-8 p-2">
        <div className="row-span-2 lg:row-span-1 h-40 rounded-lg overflow-hidden">
          <img src={napplesCity} alt="city pic" className="h-full max-w-full" />
        </div>
        <div className="col-start-2 row-start-2 lg:row-span-1 lg:col-start-2 rounded-lg overflow-hidden">
          <img
            src={florenceCity}
            alt="city pic"
            className="h-full max-w-full"
          />
        </div>
        <div className="hidden lg:flex rounded-lg overflow-hidden">
          <img src={napplesCity} alt="city pic" className="h-full max-w-full" />
        </div>
        <div className="col-start-2 row-start-1 lg:col-start-4 lg:row-start-1 rounded-lg overflow-hidden">
          <img
            src={florenceCity}
            alt="city pic"
            className="h-full max-w-full"
          />
        </div>
        <div className="hidden lg:flex rounded-lg overflow-hidden">
          <img src={napplesCity} alt="city pic" className="h-auto max-w-full" />
        </div>
        <div className="col-start-2 row-start-3 lg:col-start-2 lg:row-start-2 rounded-lg overflow-hidden">
          <img
            src={florenceCity}
            alt="city pic"
            className="h-full max-w-full"
          />
        </div>
        <div className="hidden lg:flex rounded-lg overflow-hidden">
          <img
            src={napplesCity}
            alt="city pic"
            className=" h-full max-w-full"
          />
        </div>
        <div className="row-start-3 lg:col-start-4 lg:row-start-2 rounded-lg overflow-hidden">
          <img
            src={florenceCity}
            alt="city pic"
            className="h-full max-w-full"
          />
        </div>
      </div>
    </div>
  );
}

<div className="grid grid-cols-2 grid-rows-3 gap-4">
  <div className="row-span-3">1</div>
  <div className="col-start-1 row-start-5">2</div>
  <div className="row-span-2 col-start-2 row-start-1">3</div>
  <div className="col-start-2 row-start-3">4</div>
  <div className="row-start-5">5</div>
</div>;
