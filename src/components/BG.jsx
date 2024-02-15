import React from "react";
import Icon from "./Icon";
//images
import folder_icon from "../images/folder_icon.png";
import text_icon from "../images/text_icon.png";
import net_icon from "../images/net_icon.png";
import messenger_icon from "../images/messenger_icon.png";
import exit from "../images/exit.png";

import StartMenu from "./StartMenu";
import msn_messenger_icon from "../images/msn_messenger_icon.png";
import minimize from "../images/minimize.png";
import maximize from "../images/maximize.png";
import linkedin_pfp from "../images/linkedin_pfp.jpg";

//React
import { motion } from "framer-motion";
import { useRef } from "react";

const BG = ({ showWindow, showAboutWindow, handleShowAboutWindow }) => {
  const constraintsRef = useRef(null);
  return (
    <motion.div
      className="text-white h-[95%] flex justify-center items-center backgroundDiv gap-8 relative overflow-hidden"
      ref={constraintsRef}
    >
      <StartMenu showWindow={showWindow} />

      <div
        className="flex justify-center items-center gap-8 flex-wrap"
        onClick={() => console.log("clicked 1")}
      >
        <Icon
          icon={text_icon}
          name="abt_me.txt"
          onClick={handleShowAboutWindow}
        />
        <Icon icon={text_icon} name="resume.txt" />
        <Icon
          icon={folder_icon}
          name="Projects"
          link="https://github.com/dab1an?tab=repositories"
        />
        <Icon icon={msn_messenger_icon} name="Contact" link="" />
        <Icon icon={net_icon} name="INIT" link="https://www.weareinit.org/" />

        <motion.div
          className={`w-[98%] h-[450px] absolut bg-red-500 window flex flex-col items-center justify-center gap-1 pb-0  rounded-tr-md rounded-tl-md mi:w-[500px] ${
            showAboutWindow && "hidden"
          }`}
          drag
          dragConstraints={constraintsRef}
          dragMomentum={false}
        >
          <div className="flex justify-between items-center w-[98%]">
            <h1 className="drop-shad">Notepad - About Me</h1>
            <div className="flex justify-center items gap-1">
              <img src={minimize} alt="" className="h-6 w-6 cursor-pointer" />
              <img src={maximize} alt="" className="h-6 w-6 cursor-pointer" />
              <img
                src={exit}
                alt=""
                className="h-6 w-6 cursor-pointer"
                onClick={handleShowAboutWindow}
              />
            </div>
          </div>
          <div className="bg-white h-[91%] w-[98%] flex flex-col items-center justify-between p-4">
            <div className="flex items-center gap-2 w-full">
              <img
                src={linkedin_pfp}
                alt=""
                className=" h-[100px] rounded-sm outline outline-2 outline-blue-600"
              />
              <div className="">
                <h1 className="text-black text-xl font-bold">Dabian Garnica</h1>
                <h1 className="text-neutral-500 text-xl ">
                  Computer Science @{" "}
                  <span className="text-blue-500 font-bold">
                    <a
                      href="https://www.fiu.edu/"
                      className="text-blue-500 underline"
                      target="_blank"
                    >
                      FIU
                    </a>
                  </span>
                </h1>
                <h1 className="text-neutral-500 text-xl ">
                  Program Manager @{" "}
                  <span className="text-blue-500">
                    <a
                      href="https://www.weareinit.org/"
                      className="text-blue-500 underline font-bold"
                      target="_blank"
                    >
                      INIT
                    </a>
                  </span>
                </h1>
              </div>
            </div>
            <h1 className="text-black text-sm text-wrap"></h1>
            <a href="https://github.com/dab1an" className="text-blue-500">
              {" "}
              Example Link
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BG;
