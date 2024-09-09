import React from "react";
import Sidebar from "../components/booking-requests/Sidebar";
import BookingInfo from "../components/booking-requests/BookingInfo";

export default function BookingRequests() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <BookingInfo />
    </div>
  );
}
