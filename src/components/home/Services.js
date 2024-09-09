import React from "react";
import bookIcon from "../../assets/homepage/bookIcon.png";
import edit from "../../assets/homepage/Edit.png";
import calender from "../../assets/homepage/calender.png";
import call from "../../assets/homepage/call.png";

export default function Services() {
  return (
    <div className="text-[#484848] bg-[#EFEFEF] flex flex-col gap-8 lg:gap-0 lg:flex-row items-center py-8 lg:px-12 lg:mt-28">
      <div className="flex-[0.5] flex justify-between">
        <div className="flex-[0.5] flex flex-col items-center gap-5">
          <img src={bookIcon} alt="book icon" className="w-12" />
          <p className="text-center">Book & pay later</p>
        </div>
        <div className="flex-[0.5] flex flex-col items-center gap-5">
          <img src={edit} alt="edit icon" className="w-12" />
          <p className="text-center">Flexible trip amendments</p>
        </div>
      </div>
      <div className="flex-[0.5] flex justify-between">
        <div className="flex-[0.5] flex flex-col items-center gap-5">
          <img src={calender} alt="calender icon" className="w-12" />
          <p className="text-center">Free cancellation</p>
        </div>
        <div className="flex-[0.5] flex flex-col items-center gap-5">
          <img src={call} alt="call icon" className="w-12" />
          <p className="text-center">24/7 in-person support</p>
        </div>
      </div>
    </div>
  );
}
