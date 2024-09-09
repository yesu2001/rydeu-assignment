import React from "react";
import footerLogo from "../../assets/homepage/footerlogo.png";
import facebook from "../../assets/homepage/facebook.png";
import instagram from "../../assets/homepage/insta.png";
import twitter from "../../assets/homepage/twitter.png";
import linkedin from "../../assets/homepage/linkedin.png";
import dropdown from "../../assets/homepage/dropdown.png";

export default function Footer() {
  return (
    <div className="bg-[#161616] text-white p-6 lg:p-12">
      <div className="pt-8 pb-4 lg:px-32 flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between">
        {/* first */}
        <div className="space-y-12">
          <div>
            <img src={footerLogo} alt="logo" className="w-28" />
            <p className="text-md">Solution for all ground transfers</p>
          </div>
          <div className="space-y-2">
            <p>Connect with us</p>
            <div className="flex lg:hidden gap-6">
              <img src={facebook} alt="facebook" className="w-2 h-4" />
              <img src={instagram} alt="instagram" className="w-4 h-4" />
              <img src={twitter} alt="twitter" className="w-4 h-4" />
              <img src={linkedin} alt="linkedin" className="w-4 h-4" />
            </div>
          </div>
        </div>
        {/* second */}
        <div className="space-y-6 mt-12 lg:mt-0">
          <div className="flex items-center justify-between">
            <h6 className="text-lg">COMPANY</h6>
            <img src={dropdown} alt="dropdown" className="w-4 lg:hidden" />
          </div>
          <div className="hidden text-[#afafaf] lg:flex flex-col gap-4 text-sm">
            <a href="#">About Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and conditions</a>
            <a href="#">Imprint</a>
            <a href="#">Careers / Jobs</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
        {/* third */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h6 className="text-lg">Help Center</h6>
            <img src={dropdown} alt="dropdown" className="w-4 lg:hidden" />
          </div>
          <div className="hidden text-[#afafaf] lg:flex flex-col gap-4 text-sm">
            <a href="#">Contact us</a>
            <a href="#">Customer FAQs</a>
            <a href="#">Business FAQs</a>
            <a href="#">Supplier FAQs</a>
          </div>
        </div>
        {/* foruth */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h6 className="text-lg">Our Services</h6>
            <img src={dropdown} alt="dropdown" className="w-4 lg:hidden" />
          </div>
          <div className="text-[#afafaf] hidden lg:flex flex-col gap-4 text-sm">
            <a href="#">Airport Transfer</a>
            <a href="#">City Transfer</a>
            <a href="#">Hourly Transfer</a>
            <a href="#">Business</a>
            <a href="#">Supplier</a>
          </div>
        </div>
      </div>
      <hr className="my-12 border-[#323232]" />
      <div className="text-center">
        <p className="font-light">
          Copyright ©️ 2020 rydeu.com All rights reserved.
        </p>
      </div>
    </div>
  );
}
