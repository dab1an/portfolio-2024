import React from "react";
import { motion } from "framer-motion";
import exit from "../images/exit.png";
import { useRef } from "react";

import minimize from "../images/minimize.png";
import maximize from "../images/maximize.png";
import linkedin_pfp from "../images/linkedin_pfp.jpg";

const Window = ({
  handleShowDragWindow,
  showDragWindow,
  constraintsRef,
  children,
  title,
}) => {
  return (
    <motion.div
      className={`w-[98%] h-[450px] absolut bg-red-500 window flex flex-col items-center justify-center gap-1 pb-0  rounded-tr-md rounded-tl-md mi:w-[500px] ${
        !showDragWindow && "hidden"
      }`}
      drag
      dragConstraints={constraintsRef}
      dragMomentum={false}
    >
      <div className="flex justify-between items-center w-[98%]">
        <h1 className="drop-shad">{title}</h1>
        <div className="flex justify-center items gap-1">
          <img src={minimize} alt="" className="h-6 w-6 cursor-pointer" />
          <img src={maximize} alt="" className="h-6 w-6 cursor-pointer" />
          <img
            src={exit}
            alt=""
            className="h-6 w-6 cursor-pointer"
            onClick={() => handleShowDragWindow(false)}
          />
        </div>
      </div>
      <div className="bg-white h-[91%] w-[98%] flex flex-col items-center justify-between p-4">
        {children}
        <h1 className="text-black text-sm text-wrap"></h1>
        <a href="https://github.com/dab1an" className="text-blue-500">
          {" "}
          Example Link
        </a>
      </div>
    </motion.div>
  );
};

export default Window;
