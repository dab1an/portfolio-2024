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

import { useState } from "react";

import Window from "./Window";

//React
import { motion } from "framer-motion";
import { useRef } from "react";

const BG = ({ showWindow }) => {
  const [showAboutWindow, setShowAboutWindow] = useState(true);
  const [showDirectoryWindow, setShowDirectoryWindow] = useState(false);

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
          onClick={() => setShowAboutWindow(true)}
        />
        <Icon
          icon={text_icon}
          name="resume.txt"
          onClick={() => setShowAboutWindow(true)}
        />
        <Icon
          icon={folder_icon}
          name="Projects"
          onClick={() => setShowDirectoryWindow(true)}
          link="https://github.com/dab1an?tab=repositories"
        />
        <Icon icon={msn_messenger_icon} name="Contact" link="" />
        <Icon icon={net_icon} name="INIT" link="https://www.weareinit.org/" />
        <Window
          handleShowDragWindow={setShowAboutWindow}
          showDragWindow={showAboutWindow}
          constraintsRef={constraintsRef}
          title="About Me"
        >
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
        </Window>
        <Window
          title="Projects"
          handleShowDragWindow={setShowDirectoryWindow}
          showDragWindow={showDirectoryWindow}
          constraintsRef={constraintsRef}
        >
          <div className="bg-red-500 h-[75%]"></div>
        </Window>
      </div>
    </motion.div>
  );
};

export default BG;
