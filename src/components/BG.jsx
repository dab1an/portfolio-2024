import React from "react";
import Icon from "./Icon";

//images
import folder_icon from "../images/folder_icon.png";
import text_icon from "../images/text_icon.png";
import net_icon from "../images/net_icon.png";
import msn_messenger_icon from "../images/msn_messenger_icon.png";
import linkedin_pfp from "../images/linkedin_pfp.jpg";
import c_logo from "../images/c_logo.png";

import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";

import StartMenu from "./StartMenu";
import Window from "./Window";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import AboutWindowContent from "./AboutWindowContent";

const BG = ({ showWindow }) => {
  const [showAboutWindow, setShowAboutWindow] = useState(true);
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
          onClick={() => setShowAboutWindow(true)}
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
