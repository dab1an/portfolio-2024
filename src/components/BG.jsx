import React from "react";
import Icon from "./Icon";

//images
import folder_icon from "../images/folder_icon.png";
import text_icon from "../images/text_icon.png";
import net_icon from "../images/net_icon.png";
import msn_messenger_icon from "../images/msn_messenger_icon.png";
import linkedin_pfp from "../images/linkedin_pfp.jpg";
import c_logo from "../images/c_logo.png";
import dabian_resume from "../images/dabian_resume.jpg";
import resume from "../images/resume.pdf";

import { RiDownload2Fill } from "react-icons/ri";

import StartMenu from "./StartMenu";
import Window from "./Window";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import AboutWindowContent from "./AboutWindowContent";

const BG = ({ showWindow }) => {
  const [showAboutWindow, setShowAboutWindow] = useState(true);
  const [showResumeWindow, setShowResumeWindow] = useState(false);
  const [showDirectoryWindow, setShowDirectoryWindow] = useState(false);

  const constraintsRef = useRef(null);
  return (
    <motion.div
      className="text-white h-full flex justify-center items-center backgroundDiv gap-8 relative overflow-hidden"
      ref={constraintsRef}
    >
      <StartMenu showWindow={showWindow} />

      <div className="flex justify-center items-center gap-7 flex-wrap mi:w-[500px] w-[300px]">
        <Icon
          icon={text_icon}
          name="abt_me.txt"
          onClick={() => setShowAboutWindow(true)}
        />
        <Icon
          icon={folder_icon}
          name="Projects"
          onClick={() => setShowDirectoryWindow(true)}
          link="https://github.com/dab1an?tab=repositories"
        />
        <Icon
          icon={text_icon}
          name="resume.txt"
          onClick={() => setShowResumeWindow(true)}
        />
        <Icon
          icon={msn_messenger_icon}
          name="Contact"
          link="mailto:contact@dabian.dev"
        />
        <Icon icon={net_icon} name="INIT" link="https://www.weareinit.org/" />
        <Window
          handleShowDragWindow={setShowAboutWindow}
          showDragWindow={showAboutWindow}
          constraintsRef={constraintsRef}
          title="Notepad - About Me"
          maxWidth="mi:w-[580px]"
        >
          <AboutWindowContent />
        </Window>

        <Window
          handleShowDragWindow={setShowResumeWindow}
          showDragWindow={showResumeWindow}
          constraintsRef={constraintsRef}
          title="Notepad - Resume"
          maxWidth="mi:w-[525px]"
        >
          <div href={resume} download="Dabian's Resume" className="relative">
            <img
              src={dabian_resume}
              alt=""
              className="border-[2px] mi:h-[625px] h-[550px]"
            />
            <a href={resume} target="_blank" download="Garnica_Dabian_Resume">
              <button className="bg-black bg-opacity-50 hover:bg-gray-600 h-8 w-8 absolute top-[7px] right-[7px] flex justify-center items-center rounded-md">
                <RiDownload2Fill className="text-white" />
              </button>
            </a>
          </div>
        </Window>

        <Window
          title="Projects"
          handleShowDragWindow={setShowDirectoryWindow}
          constraintsRef={constraintsRef}
        >
          <div className="bg-red-500 h-[75%]"></div>
        </Window>
      </div>
    </motion.div>
  );
};

export default BG;
