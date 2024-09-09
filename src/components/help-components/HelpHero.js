import React, { useState } from "react";
import hero_pic from "../../assets/pics/hero_bg.png";
import info from "../../assets/icons/info.png";
import location from "../../assets/icons/location.png";
import goto from "../../assets/icons/goto.png";
import telegram from "../../assets/icons/telegram.png";
import whatsapp from "../../assets/icons/whatsapp.png";
import chat from "../../assets/icons/chat.png";
import message from "../../assets/icons/message.png";
import dropdown from "../../assets/icons/arrow-down.png";
import dropup from "../../assets/icons/arrow-up.png";
import network from "../../assets/icons/network.png";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/insta.png";
import twitter from "../../assets/icons/twitter.png";
import linkedin from "../../assets/icons/linkedin.png";
import mail from "../../assets/icons/mail.png";

export default function HelpHero() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-12">
      <div
        className="w-full h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${hero_pic})`,
        }}
      >
        <div className="py-20 flex flex-col space-y-4 items-center justify-center">
          <h1 className="text-[#073A4D] text-center text-2xl lg:text-5xl font-bold">
            Hello, how can we help you?
          </h1>
          <p className="text-[#484848] text-lg lg:text-3xl text-center">
            Find Travel guide, FAQ, chat,
          </p>
        </div>
      </div>
      <div className="-mt-36 flex flex-col items-center z-40 mx-4 space-y-6 lg:space-y-12">
        <div className="lg:w-3/4 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-[0.5] flex items-center gap-8 bg-white rounded-xl shadow-[0px_3px_8px_3px_#e2e8f0] p-6">
            <div>
              <img src={info} alt="info icon" className="w-8 lg:w-14" />
            </div>
            <div className="w-full flex items-center justify-between">
              <div>
                <h5 className="font-semibold text-lg lg:text-xl">FAQ</h5>
                <p className="text-[#A8A8A8] text-md lg:text-lg">
                  Lorem ipsum doolor sit amet
                </p>
              </div>
              <img src={goto} alt="goto icon" className="w-5" />
            </div>
          </div>
          <div className="lg:flex-[0.5] flex items-center gap-8 bg-white rounded-xl shadow-[0px_3px_8px_3px_#e2e8f0] p-6">
            <div>
              <img src={location} alt="info icon" className="w-8 lg:w-10" />
            </div>
            <div className="w-full flex items-center justify-between">
              <div>
                <h5 className="font-semibold text-lg lg:text-xl">
                  Travel Guide
                </h5>
                <p className="text-[#A8A8A8] text-md lg:text-lg">
                  Lorem ipsum doolor sit amet
                </p>
              </div>
              <img src={goto} alt="goto icon" className="w-5" />
            </div>
          </div>
        </div>
        <div className="lg:w-3/4 flex flex-col gap-4 lg:gap-8 bg-white rounded-xl shadow-[0px_3px_8px_3px_#e2e8f0] p-6">
          <div className="w-full flex items-center gap-8">
            <div>
              <img src={message} alt="info icon" className="w-8 lg:w-14" />
            </div>
            <div className="flex-1 flex items-center justify-between">
              <div>
                <h5 className="font-semibold text-lg lg:text-xl">Chat</h5>
                <p className="text-[#A8A8A8] text-md lg:text-lg">
                  Lorem ipsum doolor sit amet
                </p>
              </div>
              <img
                src={openIndex === 1 ? dropup : dropdown}
                alt="goto icon"
                className="w-5 cursor-pointer"
                onClick={() => handleToggle(1)}
              />
            </div>
          </div>
          {openIndex === 1 && (
            <div className="flex justify-center gap-6 lg:gap-12">
              <div className="flex flex-col items-center">
                <img
                  src={telegram}
                  alt="telegram icon"
                  className="w-8 lg:w-16"
                />
                <p className="text-sm font-medium">Telegram</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={whatsapp}
                  alt="whatsapp icon"
                  className="w-8 lg:w-16"
                />
                <p className="text-sm font-medium">Whatsapp</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={chat} alt="chat icon" className="w-8 lg:w-16" />
                <p className="text-sm font-medium">Live Chat</p>
              </div>
            </div>
          )}
        </div>
        <div className="lg:w-3/4 flex flex-col gap-4 lg:gap-8 bg-white rounded-xl shadow-[0px_3px_8px_3px_#e2e8f0] p-6">
          <div className="w-full flex items-center gap-8">
            <div>
              <img src={network} alt="info icon" className="w-8 lg:w-14" />
            </div>
            <div className="flex-1 flex items-center justify-between">
              <div>
                <h5 className="font-semibold text-lg lg:text-xl">Social</h5>
                <p className="text-[#A8A8A8] text-md lg:text-lg">
                  Lorem ipsum doolor sit amet
                </p>
              </div>
              <img
                src={openIndex === 2 ? dropup : dropdown}
                alt="goto icon"
                className="w-5 cursor-pointer"
                onClick={() => handleToggle(2)}
              />
            </div>
          </div>
          {openIndex === 2 && (
            <div className="flex justify-center gap-8 ml-6 lg:ml-0">
              <img src={facebook} alt="facebook icon" className="w-8 lg:w-10" />
              <img src={instagram} alt="insta icon" className="w-8 lg:w-10" />
              <img src={twitter} alt="twitter icon" className="w-8 lg:w-10" />
              <img src={linkedin} alt="linkedin icon" className="w-8 lg:w-10" />
            </div>
          )}
        </div>
        <div className="lg:w-3/4 flex flex-col gap-4 bg-white rounded-xl shadow-[0px_3px_8px_3px_#e2e8f0] p-6">
          <div className="flex items-center gap-8">
            <div>
              <img src={mail} alt="info icon" className="w-8 lg:w-14" />
            </div>
            <div className="flex-1 flex items-center justify-between">
              <div>
                <h5 className="font-semibold text-lg lg:text-xl">Send Query</h5>
                <p className="text-[#A8A8A8] text-md lg:text-lg">
                  Lorem ipsum doolor sit amet
                </p>
              </div>
              <img
                src={openIndex === 3 ? dropup : dropdown}
                alt="goto icon"
                className="w-5 cursor-pointer"
                onClick={() => handleToggle(3)}
              />
            </div>
          </div>
          {openIndex === 3 && (
            <div
              className={`ml-3 mt-4 lg:px-24 space-y-5 overflow-hidden transition-height duration-300 ease-in-out ${
                openIndex === 3 ? "h-full" : "h-0"
              }`}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:flex-[0.5] flex flex-col gap-1">
                  <label className="text-[#484848]">Name</label>
                  <input
                    type="text"
                    className="rounded-md border border-[#E2E2E2] bg-[#F7F7F7] h-9"
                  />
                </div>
                <div className="lg:flex-[0.5] flex flex-col gap-1">
                  <label className="text-[#484848]">Email</label>
                  <input
                    type="text"
                    className="rounded-md border border-[#E2E2E2] bg-[#F7F7F7] h-9"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:flex-[0.5] flex flex-col gap-1">
                  <label className="text-[#484848]">Subject</label>
                  <input
                    type="text"
                    className="rounded-md border border-[#E2E2E2] bg-[#F7F7F7] h-9"
                  />
                </div>
                <div className="lg:flex-[0.5] flex flex-col gap-1">
                  <label className="text-[#484848]">Order No.</label>
                  <input
                    type="text"
                    className="rounded-md border border-[#E2E2E2] bg-[#F7F7F7] h-9"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[#484848]">Your Query</label>
                <textarea
                  rows="4"
                  className="rounded-md border border-[#E2E2E2] bg-[#F7F7F7]"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button className="w-52 bg-[#FD2E5A] mt-4 text-white font-semibold rounded-md px-6 py-2">
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
