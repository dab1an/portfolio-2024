import React from "react";
import folder_pics from "../images/folder_pics.png";

const StartMenuFolder = (props) => {
  return (
    <div>
      <a href={props.link} className="flex items-center gap-2" target="_blank">
        <img src={props.folder} alt="" className="h-[35px]" />
        <div className="flex flex-col text-sm">
          <span>
            <h1 className="text-black p-0 font-bold">{props.social}</h1>
            <h1 className="text-black p-0">{props.handle}</h1>
          </span>
        </div>
      </a>
    </div>
  );
};

export default StartMenuFolder;
