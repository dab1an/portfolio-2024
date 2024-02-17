import React from "react";
import { motion } from "framer-motion";
import exit from "../images/exit.png";
import minimize from "../images/minimize.png";
import maximize from "../images/maximize.png";
import notepad from "../images/notepad.png";

const Window = ({
  handleShowDragWindow,
  showDragWindow,
  constraintsRef,
  children,
  title,
  maxWidth,
}) => {
  return (
    <motion.div
      className={`w-[98%] absolut bg-red-500 window flex flex-col items-center justify-center gap-1 pt-2 pb-1  rounded-tr-md rounded-tl-md ${maxWidth} ${
        !showDragWindow && "hidden"
      }`}
      drag
      dragConstraints={constraintsRef}
      dragMomentum={false}
    >
      <div className="flex justify-between items-center w-[98%]">
        <div className="flex justify-center items-center">
          <img src={notepad} alt="" className="h-6  " />
          <h1 className="drop-shad regular">{title}</h1>
        </div>
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
      <div className="bg-white h-[91%] w-[98%] flex flex-col items-center gap-4 p-4 font-">
        {children}
      </div>
    </motion.div>
  );
};

export default Window;
