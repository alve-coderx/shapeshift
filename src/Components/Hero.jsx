import React, { useState } from "react";
import Modal from "./Modal";

const Hero = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="flex space-y-6 flex-col items-center justify-center w-full h-screen lg:px-0 px-5">
      <div className="css-ixm02w">
        <svg viewBox="0 0 23 24" focusable="false" className="text-white lg:w-20 w-16">
          <g fill="currentColor">
            <path d="M9.606 22.16L11.228 24l1.708-1.936a21.82 21.82 0 015.062-4.234l4.275-2.577-1.668-5.29L22.28.025 14.6 3.049H7.44L.117 0l1.664 9.957L-.04 15.26l4.387 2.553a21.818 21.818 0 015.259 4.348zm-1.238-2.985A23.146 23.146 0 005.2 16.857l4.462 1.204-1.293 1.114zm2.813-2.433l-7.206-6.12h14.298l-7.092 6.12zm2.864 2.428l-1.315-1.114 4.48-1.22a23.167 23.167 0 00-3.156 2.333l-.009.001zm-.788-2.562l6.351-5.487.955 3.494-7.305 1.993zm7.406-14.6L19.59 8.385l-3.817-4.45 4.89-1.925zM7.626 4.303h6.803l4.348 5.068H3.71l3.915-5.068zM1.739 2.033l4.575 1.905-3.503 4.53-1.072-6.435zm.987 9.178l6.366 5.4-7.376-1.99 1.01-3.41z"></path>
          </g>
        </svg>
      </div>
      <p className="text-white lg:text-[6rem] text-[2rem] text-center lg:text-left">
        Explore the <span className="font-[700]">DeFi Universe</span>
      </p>
      <p className="text-white lg:text-xl text-md text-center lg:text-left">
        Welcome to the new ShapeShift. 100% Free. Open Source. Community Owned.
        Non-Custodial. Private.
      </p>
      <div className="flex lg:flex-row flex-col items-center lg:space-x-5 ">
        <button
          onClick={() => setModal(true)}
          className="bg-[#5F80FA] text-white rounded-xl px-6 font-[600] py-3"
        >
          Connect Wallet
        </button>
        {modal && <Modal setModal={setModal} />}
        <p className="text-2xl text-slate-500 font-[600]" translation="common.or">
          or
        </p>
        <button className="text-white px-6 font-[600] py-3 border  rounded-xl">
          View a Demo
        </button>
      </div>
      <div className="absolute bottom-5 flex items-center space-x-5">
        <p className="transCLr text-xl" translation="common.terms">
          Terms of Service
        </p>
        <p className="transCLr text-xl" translation="common.privacy">
          Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Hero;
