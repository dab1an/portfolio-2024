import React from "react";
import folder_icon from "../images/folder_icon.png";

const Icon = (props) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <a href={props.link} target="_blank">
          <img src={props.icon} alt="" className="h-12 w-12 cursor-pointer" />
        </a>
        <h1 className="">{props.name}</h1>
      </div>
    </div>
  );
};

export default Icon;
