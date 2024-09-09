import React from "react";
import flag from "../../assets/icons/flag.png";
import settings from "../../assets/icons/settings.png";
import avatar from "../../assets/icons/avatar.png";
import menu from "../../assets/icons/menu.png";
import mobMenu from "../../assets/icons/mob-menu.png";
import mobAvatar from "../../assets/icons/mob-avatar.png";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between bg-white px-4 lg:px-8 py-4 shadow-md">
      <h2 className="text-[#FD2E5A] font-semibold text-3xl lg:text-4xl">
        LOGO
      </h2>
      {/* Mobile options */}
      <div className="flex items-center gap-4 lg:hidden ">
        <div>
          <p className="font-semibold text-slate-700">Open Requests</p>
        </div>
        <div className="flex items-center gap-2 py-1.5 px-4 rounded-full">
          <img src={mobAvatar} alt="avatar" className="w-5" />
          <img src={mobMenu} alt="menu" className="w-7" />
        </div>
      </div>
      {/* Desktop options */}
      <div className="hidden lg:flex items-center gap-8">
        <div className="flex items-center gap-2">
          <img src={settings} alt="settings" className="w-6" />
          <p className="font-lg">Help</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={flag} alt="flag" />
          <p className="font-lg">Deustch | EUR</p>
        </div>
        <div className="flex items-center gap-2 bg-[#DFDFDF] py-1.5 px-4 rounded-full">
          <img
            src={avatar}
            alt="avatar"
            className="w-6 bg-[#A0A0A0] rounded-full p-1"
          />
          <img src={menu} alt="menu" className="w-7" />
        </div>
      </div>
    </div>
  );
}
