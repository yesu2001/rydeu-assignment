import React from "react";
import down from "../../assets/bookings/down.png";
import back from "../../assets/bookings/back.png";
import ic1 from "../../assets/bookings/ic1.png";
import ic2 from "../../assets/bookings/ic2.png";
import ic3 from "../../assets/bookings/ic3.png";
import ic4 from "../../assets/bookings/ic4.png";
import info from "../../assets/bookings/info.png";

export default function BookingInfo() {
  return (
    <div className="w-full bg-[#f2f2f2] py-4 px-8">
      <div className="flex items-center justify-end gap-4">
        <p className="w-8 h-8 text-center rounded-full bg-[#004A85] text-white p-1 px-2">
          U
        </p>
        <p>Username</p>
        <img src={down} alt="down icon" className="w-2 h-2" />
      </div>
      <div className="flex items-center gap-4 mb-4">
        <img src={back} alt="back icon" className="w-8" />
        <p className="text-xl font-medium">Requests</p>
      </div>
      <div className="bg-white p-16">
        <hr />
        <div className="py-6 space-y-4">
          <p className="font-medium">Offer Ancillary</p>
          <div className="text-[#484848] text-sm font-medium flex items-center gap-12">
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 flex items-center justify-center border bg-orange-50 border-[#FF8924] rounded-full">
                <img src={ic1} alt="" className="w-10" />
              </div>
              <p>Porter Service</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 flex items-center justify-center border border-[#B9B9B9] rounded-full p-4">
                <img src={ic2} alt="" className="w-10" />
              </div>
              <p>Wifi</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 flex items-center justify-center bg-orange-50 border border-[#FF8924] rounded-full p-4">
                <img src={ic1} alt="" className="w-10" />
              </div>
              <p>Child Seat</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 flex items-center justify-center border border-[#B9B9B9] rounded-full p-4">
                <img src={ic4} alt="" className="w-5" />
              </div>
              <p>Wheel Chair</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 flex items-center justify-center border border-[#B9B9B9] rounded-full p-4">
                <img src={ic2} alt="" className="w-10" />
              </div>
              <p>Meet & Greet</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 flex items-center justify-center bg-orange-50 border border-[#FF8924] rounded-full p-4">
                <img src={ic3} alt="" className="w-4" />
              </div>
              <p>Bottled Water</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 flex items-center justify-center border border-[#B9B9B9] rounded-full p-4">
                <img src={ic4} alt="" className="w-5" />
              </div>
              <p>Phone Charger</p>
            </div>
          </div>
        </div>
        <hr className="mt-5 mb-8" />
        <div className="">
          <p className="font-medium">Offer Price</p>
          <div className="flex justify-between text-sm">
            <div className="flex-[0.3] ml-3">
              <p className="my-3">Type of booking</p>
              <div className="shadow-md">
                <div className="flex items-center justify-between px-2 py-3 bg-[#F3F3F3] border border-[#E2E2E2] rounded-sm">
                  <p>Both</p>
                  <img src={down} alt="down arrow icon" className="w-3" />
                </div>
                <div className="flex items-center gap-4 px-2 py-3">
                  <p>Pre-Payment</p>
                  <p className="text-[#726F6F] text-xs">
                    (Full amount paid on the website)
                  </p>
                </div>
                <div className="flex items-center gap-4 px-2 py-3">
                  <p>Payment on pickup</p>
                  <p className="text-[#726F6F] text-xs">
                    (Reservation amount paid on website)
                  </p>
                </div>
                <div className="px-2 py-3">
                  <p>Both</p>
                </div>
              </div>
              <div className="mt-4 flex gap-8 font-medium">
                <p>Offer Available untill</p>
                <p>10th May, 19:00</p>
              </div>
            </div>
            <div className="flex-[0.3] space-y-4">
              <p className="font-medium">Pre-Payment</p>
              <div className="bg-[#ECF4FC] p-6 space-y-4 rounded-sm">
                <div className="flex items-center justify-between">
                  <p>You Get</p>
                  <p className="text-[#484848] font-bold text-lg">€ 425</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Rydeu Commission 15%</p>
                  <p className=" text-[#484848] font-bold text-lg">€ 75</p>
                </div>
                <hr className="border border-[#E0E3E8]" />
                <div className="flex items-center justify-between">
                  <p>Total Offer Price</p>
                  <p className="text-[#33B20C] text-xl font-semibold">€ 500</p>
                </div>
              </div>
              <div className="flex gap-4">
                <img src={info} alt="info" className="w-4 h-4" />
                <p className="text-[#726F6F] w-3/4">
                  Customer pays the full amount on the website while booking.
                </p>
              </div>
            </div>
            <div className="flex-[0.3] space-y-4">
              <p className="font-medium">Pre-Payment</p>
              <div className="bg-[#ECF4FC] p-6 space-y-4 rounded-sm">
                <div className="flex items-center justify-between">
                  <p>You Get</p>
                  <p className="text-[#484848] font-bold text-lg">€ 400</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Rydeu Commission 20%</p>
                  <p className="text-[#484848] font-bold text-lg">€ 100</p>
                </div>
                <hr className="border border-[#E0E3E8]" />
                <div className="flex items-center justify-between">
                  <p>Total Offer Price</p>
                  <p className="text-[#33B20C] text-xl font-semibold">€ 500</p>
                </div>
              </div>
              <div className="flex gap-4">
                <img src={info} alt="info" className="w-4 h-4" />
                <p className="text-[#726F6F] w-3/4">
                  Customer pays only the commission amount on the website to
                  reserve the booking. Balance amount is paid to the driver
                  during pickup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
