import React from "react";
import Robu from "../assets/robu.png";
import HeadPhone from "../assets/headset.svg";
import AppDownload from "../assets/appdownload.png";
import Telegram from "../assets/telegram.svg";

function Footer() {
  return (
    <div className="mt-[50px]">

      <div className="bg-[#362D86] flex items-center">
        <img src={Telegram} alt="send" className="h-[40px] w-[40px] ml-[60px]"/>
        <h1 className="text-white text-xl p-4 ml-[10px]">Subscribe to our Newsletter</h1>
        <h1 className="text-white text-md p-4 mr-[190px]">
          to get promotional offers & discounts
        </h1>
        <input
          type="text"
          placeholder="First Name"
          className="rounded-2xl pl-4 py-2 mr-[20px]"
        />
        <input
          type="text"
          placeholder="Email ID"
          className="rounded-2xl pl-4 py-2 mr-[20px]"
        />
        <button className="rounded-xl bg-white p-2 px-4 hover:bg-indigo-400 hover:text-white">Subscribe</button>
      </div>
      
      <div className="bg-grey-400 mt-[50px] flex">
        <div className="ml-[40px] mr-[120px]">
          <img src={Robu} alt="robu" className="h-[80px] w-[250px] mt-[50px]" />
          <div className="flex">
            <img
              src={HeadPhone}
              alt="contact"
              className="h-[40px] w-[50px] mt-[50px] "
            />
            <div>
              <h3 className="mt-[45px] ml-[5px] text-sm">
                Got Questions ? Call us between 9:15 AM to 6:15 PM
                Monday-Saturday
              </h3>
              <h3 className="font-semibold text-xl ml-[4px]">
                1800 266 6123, 020 68197600
              </h3>
            </div>
          </div>
        </div>

        <div className="mt-[50px] mr-[50px]">
          <h1 className="font-semibold pb-5">Information</h1>
          <h3 className="pb-2 cursor-pointer">Track your order</h3>
          <h3 className="pb-2 cursor-pointer">Videos</h3>
          <h3 className="pb-2 cursor-pointer">FAQs</h3>
          <h3 className="pb-2 cursor-pointer">Careers</h3>
        </div>

        <div className="mt-[50px] mr-[50px]">
          <h1 className="font-semibold pb-5">My Account</h1>
          <h3 className="pb-2 cursor-pointer">Cart</h3>
          <h3 className="pb-2 cursor-pointer">Checkout</h3>
          <h3 className="pb-2 cursor-pointer">My Account</h3>
          <h3 className="pb-2 cursor-pointer">Payment Options</h3>
        </div>

        <div className="mt-[50px] mr-[50px]">
          <h1 className="font-semibold pb-5">Services</h1>
          <h3 className="pb-2 cursor-pointer">About Us</h3>
          <h3 className="pb-2 cursor-pointer">Contact Us</h3>
          <h3 className="pb-2 cursor-pointer">Robu B2B</h3>
        </div>

        <div className="mt-[50px] mr-[50px]">
          <h1 className="font-semibold pb-5">Policies</h1>
          <h3 className="pb-2 cursor-pointer">Investor Relations</h3>
          <h3 className="pb-2 cursor-pointer">MACFOS CSR</h3>
          <h3 className="pb-2 cursor-pointer">Privacy Policy</h3>
          <h3 className="pb-2 cursor-pointer">Terms of Service</h3>
          <h3 className="pb-2 cursor-pointer">Shipping & Refund</h3>
          <h3 className="pb-2 cursor-pointer">E-waste Collection</h3>
        </div>

        <img
          src={AppDownload}
          alt="download app"
          className="h-[180px] mt-[50px] cursor-pointer"
        />
      </div>
      <div className="bg-[#E5E7EB]">
        <h3 className="text-center text-sm p-2">
          <span className="font-semibold">© Robu.in</span> is registered
          trademark of MACFOS LIMITED - All Rights Reserved
        </h3>
      </div>
    </div>
  );
}

export default Footer;
