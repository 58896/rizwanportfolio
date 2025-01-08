import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaGithub,
  FaWhatsapp,
  FaWordpress,
  FaShopify,
} from "react-icons/fa";
import { SiNextdotjs, SiGmail } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full-Stack Developer.", "Shopify Specialist.", "WordPress Specialist"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Muhammad Rizwan</span>
        </h1>
        <h2 className="text-xl font-bold text-white sm:text-2px lg:text-4xl">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide mt-6 sm:mt-8 lg:mt-8">
          As a full-stack developer with expertise in Shopify and WordPress, I craft custom, high-performance websites tailored to your business needs. I specialize in building scalable, user-friendly e-commerce solutions that drive conversions and deliver seamless experiences. With a focus on clean code and results-driven design, I help brands grow and succeed online.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://wa.me/923495547791" target="blank">
              <span className="bannerIcon">
                <FaWhatsapp />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <FaWordpress />
            </span>
            <span className="bannerIcon">
              <FaShopify />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
