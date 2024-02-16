import React from "react";

import linkedin_pfp from "../images/linkedin_pfp.jpg";
import c_logo from "../images/c_logo.png";

import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import { SiExpress } from "react-icons/si";

const AboutWindowContent = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 w-full">
        <img
          src={linkedin_pfp}
          alt=""
          className=" mi:h-[125px] rounded-sm outline outline-2 outline-blue-600 h-[85px]"
        />
        <div className="">
          <h1 className="text-black text-2xl font-bold">Dabian Garnica</h1>
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
      <div className="text-black text-md text-justify">
        I'm an aspiring web developer and software engineer with a passion for
        creating elegant digital solutions. Constantly learning and adapting, I
        thrive on collaborating with others to tackle challenging projects. With
        a commitment to excellence and a drive to innovate, I'm excited to
        contribute to the dynamic world of technology.
      </div>
      <div className="w-full flex flex-col gap-1">
        <h1 className="text-black font-bold">Languages:</h1>
        <div className="flex flex-wrap bg-white gap-2">
          <div className="window-bg-java h-8 rounded-md flex items-center p-2 gap-1 text-md">
            <h1 className=""> Java </h1>
            <FaJava className="text-white drop-shadow-lg text-lg" />
          </div>
          <div className="window-bg-python h-8 rounded-md flex items-center p-2 gap-1 text-md">
            <h1 className=""> Python </h1>
            <FaPython className="text-white lg text-lg" />
          </div>

          <div className="window-bg h-8 rounded-md flex items-center p-2 gap-1 text-md">
            <h1 className=""> C/C++/C# </h1>
            <img src={c_logo} alt="" className="h-4" />
          </div>
          <div className="window-bg-python h-8 rounded-md flex items-center p-2 gap-1 text-md">
            <h1 className=""> JavaScript </h1>
            <IoLogoJavascript className="text-white lg text-lg" />
          </div>
          <div className="window-bg h-8 rounded-md flex items-center p-2 gap-1 text-md">
            <h1 className=""> TypeScript </h1>
            <BiLogoTypescript className="text-white lg text-xl" />
          </div>
          <div className="window-bg-java h-8 rounded-md flex items-center p-2 gap-1 text-md">
            <h1 className="">HTML</h1>
            <BiLogoTypescript className="text-white lg text-xl" />
          </div>
          <div className="window-bg h-8 rounded-md flex items-center p-2 gap-1 text-md">
            <h1 className="">CSS</h1>
            <BiLogoTypescript className="text-white lg text-xl" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-1">
        <h1 className="text-black font-bold">Frameworks:</h1>
        <div className="flex flex-wrap bg-white gap-2">
          <div className="window-bg-react h-8 rounded-md flex items-center p-2 gap-1 text-md">
            <h1 className=""> React </h1>
            <FaReact className="text-white lg text-lg" />
          </div>
          <div className="window-bg-next h-8 rounded-md flex items-center p-2 gap-1 text-md">
            <h1 className=""> Next.js </h1>
            <TbBrandNextjs className="text-white lg text-lg" />
          </div>
          <div className="window-bg-express h-8 rounded-md flex items-center p-2 gap-1 text-md">
            <h1 className="text-gray-600"> Express.js </h1>
            <SiExpress className="text-black lg text-lg" />
          </div>
          <div className="window-bg-react h-8 rounded-md flex items-center p-2 gap-1 text-md">
            <h1 className="text-white"> TailwindCSS </h1>
            <SiTailwindcss className="text-white lg text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWindowContent;
