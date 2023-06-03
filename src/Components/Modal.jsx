import React, { useState } from "react";
import QRModal from "./QRModal";
import ImportWallet from "./ImportWallet";
import metamask from "../Assets/metamask.png";
import shapeshift from "../Assets/shapeshift.PNG";
import keplr from "../Assets/keplr.PNG";
import kk from "../Assets/kk.PNG";
import walletC from "../Assets/walletC.svg";
import xdefi from "../Assets/xdefi.PNG";
import { RiCloseFill } from "react-icons/ri";

const Modal = ({ setModal }) => {
  const [qrModal, setQRModal] = useState(false);
  const [importWallet, setImportWallet] = useState(false);
  const [currentWallet, setCurrentWallet] = useState();

  return (
    <div className="transition-10 duration-50 justify-center items-center flex fixed top-0  inset-0 z-50 outline-0 ">
      <div className="">
        {!qrModal ? (
          <div className="lg:w-[30rem] flex flex-col space-y-6 w-[23rem] bg-[#1A202C] lg:p-8 md:p-8 p-5 rounded-xl">
            <div className="flex justify-end cursor-pointer">
              <RiCloseFill
                onClick={() => setModal(false)}
                className="text-2xl text-right text-white font-[500]"
              />
            </div>
            <p className="text-2xl text-white font-[500]">Connect A Wallet</p>
            <p className="text-md text-slate-500 font-[500]">
              By connecting a wallet, you agree to ShapeShift's Terms of Service
              and acknowledge that you have read and understand the ShapeShift
              disclaimer.
            </p>
            <div className="grid lg:grid-cols-2 grid-cols-2 gap-5">
              <button
                onClick={() => {
                  setCurrentWallet(shapeshift);
                  setImportWallet(true);
                }}
                className="lg:text-md flex items-center justify-between space-x-3 bg-[#2d3748] lg:p-5 p-3 rounded-2xl w-full text-white text-sm mt-2 font-[500]"
              >
                <span>ShapeShift</span>
                <img src={shapeshift} alt="shapeshift" />
              </button>
              <button
                onClick={() => {
                  setCurrentWallet(keplr);
                  setImportWallet(true);
                }}
                className="lg:text-md flex items-center justify-between space-x-3 bg-[#2d3748] lg:p-5 p-3 rounded-2xl w-full text-white text-sm mt-2 font-[500]"
              >
                <span>keepkey</span>
                <img src={keplr} alt="keplr" />
              </button>
              <button
                onClick={() => {
                  setCurrentWallet(metamask);
                  setImportWallet(true);
                }}
                className="lg:text-md flex items-center justify-between space-x-3 bg-[#2d3748] lg:p-5 p-3 rounded-2xl w-full text-white text-sm mt-2 font-[500]"
              >
                <span>MetaMask</span>
                <img src={metamask} alt="metamask" className="w-7" />
              </button>
              <button
                onClick={() => setQRModal(true)}
                className="lg:text-md flex items-center justify-between space-x-3 bg-[#2d3748] lg:p-5 p-3 rounded-2xl w-full text-white text-sm mt-2 font-[500]"
              >
                <span>WalletConnect</span>
                <img src={walletC} alt="walletC" className="w-7" />
              </button>
              <button
                onClick={() => {
                  setCurrentWallet(xdefi);
                  setImportWallet(true);
                }}
                className="lg:text-md flex items-center justify-between space-x-3 bg-[#2d3748] lg:p-5 p-3 rounded-2xl w-full text-white text-sm mt-2 font-[500]"
              >
                <span>XDEFI</span>
                <img src={xdefi} alt="xdefi" className="w-7" />
              </button>
              <button
                onClick={() => {
                  setCurrentWallet(kk);
                  setImportWallet(true);
                }}
                className="lg:text-md flex items-center justify-between space-x-3 bg-[#2d3748] lg:p-5 p-3 rounded-2xl w-full text-white text-sm mt-2 font-[500]"
              >
                <span>Keplr</span>
                <img src={kk} alt="kk" className="w-7" />
              </button>
            </div>
            <p className="text-sm text-slate-500 font-[400] text-center">
              Don't have a wallet?{" "}
              <span className="underline text-[#7F99FB] hover:text-[#486FF9] font-[600]">
                Create One
              </span>
            </p>
          </div>
        ) : (
          <QRModal
            setImportWallet={setImportWallet}
            importWallet={importWallet}
            setModal={setModal}
            setQRModal={setQRModal}
            setCurrentWallet={setCurrentWallet}
            currentWallet={currentWallet}
          />
        )}
      </div>
      {importWallet && (
        <ImportWallet
          currentWallet={currentWallet}
          setImportWallet={setImportWallet}
        />
      )}
    </div>
  );
};

export default Modal;
