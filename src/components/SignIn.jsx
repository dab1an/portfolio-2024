import React from "react";

import { useState, useEffect } from "react";

import dabianpc_logo from "../images/dabianpc_logo.png";

import linked_in_new from "../images/linked_in_new.jpeg";
import blank_profile from "../images/blank_profile.jpeg";
import go_icon from "../images/go_icon.png";
import power_icon from "../images/power_icon.png";

const SignIn = () => {
  const [showSignIn, setShowSignIn] = useState(true);

  useEffect(() => {
    setShowSignIn(!showSignIn);
  }, []);

  return (
    <div
      className={`absolute h-svh w-full z-[12] flex flex-col sign-in-color ${
        showSignIn && "hidden"
      }`}
    >
      <div className="w-full sign-in-top border-solid"></div>
      <div className="w-full h-full sign-in-main emd:flex-row flex flex-col items-center justify-center">
        <div className="emd:block hidden w-[50%] h-full">
          <div className="sign-in-splash h-full w-[full]flex flex-col justify-center items-start">
            <img src={dabianpc_logo} alt="" className="h-[190px] mb-[20px]" />
            <h1 className="text-white text-2xl">
              To begin, click your user name
            </h1>
          </div>
        </div>
        <div className="emd:w-[50%] w-full emd:block flex flex-col justify-center items-center gap-8">
          <img src={dabianpc_logo} alt="" className="emd:h-0 h-[200px]" />
          <span className="divider3 emd:h-0 h-[2px] emd:w-0 w-full"></span>
          <div className="sign-in-account ml-9 h-[110px] emd:w-[380px] w-[370px] flex items-center gap-4 pl-3">
            <img
              src={linked_in_new}
              alt=""
              className="h-[85px] w-[85px] rounded-md border-[3px] border-yellow-400 drop-shad"
            />

            <div className="text-white flex flex-col relative">
              <h1 className="text-3xl pb-4">Dabian G.</h1>
              <p className="pb-6 text-sm">Type your password</p>
              <div action="" className="absolute top-[74px] flex gap-2">
                <input
                  className="rounded-md h-[38px] text-black password pl-2 text-xl w-[175px]"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setShowSignIn(!showSignIn);
                    }
                  }}
                />
                <img
                  src={go_icon}
                  alt=""
                  className="h-[34px] rounded-sm password cursor-pointer"
                  onClick={() => {
                    setShowSignIn(!showSignIn);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sign-in-bottom border-solid flex items-center justify-between emd:pt-[35px] emd:pb-[35px] emd:pl-[35px] emd:pr-[80px] pl-[35px] pr-[35px]">
        <div className="flex items-center gap-2 text-white text-lg">
          <img
            src={power_icon}
            alt=""
            className="emd:h-[34px] h-[24px] cursor-pointer"
          />
          <span className="emd:text-md text-sm">Turn off computer</span>
        </div>
        <span className="text-white emd:text-[15px] text-[6px]">
          After you log on, you can add or change accounts.
          <br />
          Just go to Control Panel and click User Accounts.
        </span>
      </div>
    </div>
  );
};

export default SignIn;
