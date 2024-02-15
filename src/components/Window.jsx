import React from "react";
import { motion } from "framer-motion";
import exit from "../images/exit.png";
import { useRef } from "react";

const Window = () => {
  const constraintsRef = useRef(null);
  return (
    <motion.div
      className="w-96 h-[450px] absolut bg-red-500 window flex flex-col items-center justify-center gap-1 pb-3"
      drag
      dragConstraints={constraintsRef}
      dragMomentum={false}
    >
      <div className="flex justify-end w-full p-2">
        <img src={exit} alt="" className="h-6 w-6 cursor-pointer" />
      </div>
      <div className="bg-white h-[85%] w-[95%] pb-6"></div>
    </motion.div>
  );
};

export default Window;
