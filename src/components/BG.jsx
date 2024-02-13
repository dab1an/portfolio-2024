import React from "react";
import Icon from "./Icon";
import folder_icon from "../images/folder_icon.png";
import text_icon from "../images/text_icon.png";
import net_icon from "../images/net_icon.png";
import messenger_icon from "../images/messenger_icon.png";
import StartMenu from "./StartMenu";
const BG = () => {
  return (
    <div className="text-white h-[96%] flex justify-center items-center backgroundDiv gap-8 relative">
      <StartMenu />
      <div className="flex justify-center items-center gap-8">
        <Icon icon={text_icon} name="Resume" />
        <Icon
          icon={folder_icon}
          name="Projects"
          link="https://github.com/dab1an?tab=repositories"
        />
        <Icon icon={messenger_icon} name="Contact" link="" />
        <Icon icon={net_icon} name="INIT" link="https://www.weareinit.org/" />
      </div>
    </div>
  );
};

export default BG;
