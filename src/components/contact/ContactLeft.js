import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { SiGmail } from 'react-icons/si';

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Muhammad Rizwan</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Mern Stack Developer skilled in MongoDB, Express, React, Node.js, and customizing Shopify and WordPress for seamless eCommerce and web solutions.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+923495547791</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">Khanr2389@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
           <a href="https://github.com/58896" target="blank">
                        <span className="bannerIcon">
                          <FaGithub />
                        </span>
                      </a>
          <a href="mailto:khanr2389@gmail.com" target="blank">
                       <span className="bannerIcon">
                         <SiGmail />
                       </span>
                     </a>
          <a href="https://www.linkedin.com/in/rizwan-khan-2964b11a1/" target="blank">
                       <span className="bannerIcon">
                         <FaLinkedinIn/>
                       </span>
                     </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft
//git remote add origin https://github.com/58896/rizwanportfolio.git
