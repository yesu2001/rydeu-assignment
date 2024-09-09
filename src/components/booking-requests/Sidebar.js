import React from "react";
import logo from "../../assets/bookings/logo.png";
import bell from "../../assets/bookings/bell.png";
import ic6 from "../../assets/bookings/ic6.png";
import car from "../../assets/bookings/car.png";
import ic5 from "../../assets/bookings/ic5.png";
import account from "../../assets/bookings/account.png";
import bill from "../../assets/bookings/bill.png";

export default function Sidebar() {
  return (
    <div className="h-auto w-24 flex flex-col py-4 bg-gradient-to-br from-[#004A85] to-[#004A85] space-y-16">
      <div className="flex justify-center">
        <img src={logo} alt="" className="w-16" />
      </div>
      <div className="w-full flex flex-col space-y-4">
        <div className="flex justify-center py-3 border-l-4 border-white bg-[rgba(255,255,255,0.1)]">
          <img src={bell} alt="" className="w-6" />
        </div>
        <div className="flex justify-center py-3">
          <img src={ic6} alt="" className="w-6" />
        </div>
        <div className="flex justify-center py-3">
          <img src={car} alt="" className="w-6" />
        </div>
        <div className="flex justify-center py-3">
          <img src={ic5} alt="" className="w-6" />
        </div>
        <div className="flex justify-center py-3">
          <img src={account} alt="" className="w-6" />
        </div>
        <div className="flex justify-center py-3">
          <img src={bill} alt="" className="w-6" />
        </div>
      </div>
    </div>
  );
}
