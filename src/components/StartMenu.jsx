import React from "react";
import profilePic from "../images/blank_profile.jpeg";
import folder_pics from "../images/folder_pics.png";
import folder_chat from "../images/folder_chat.png";
import folder_music from "../images/folder_music.png";
import StartMenuFolder from "./StartMenuFolder.jsx";
import react_logo from "../images/react_logo.png";
import tailwind_logo from "../images/tailwind_logo.png";
import profile from "../images/profile.jpg";

const StartMenu = ({ showWindow }) => {
  return (
    <div
      className={`h-[450px] mi:w-[500px] w-full absolute bottom-0 left-0 start-menu rounded-tr-lg flex flex-col items-center gap-3 pt-4 drop-shad p-1 overflow-hidden ${
        showWindow && "hidden"
      } z-10`}
    >
      <div className="w-[95%] flex items-center gap-4">
        <img
          src={profile}
          alt=""
          className=" w-[50px] rounded-sm outline outline-2 outline-white"
        />
        <h1 className="text-white text-xl drop-shad">Dabian</h1>
      </div>
      <div className="w-[99%] h-[320px] bg-white flex flex-col relative">
        <span className="divider h-[4px]"></span>
        <div className="w-full h-full flex pl-3">
          <div className="h-full mi:w-[39%] w-[60%] flex flex-col justify-start pt-2 gap-2">
            <section className="flex flex-col gap-2 pb-2">
              <StartMenuFolder
                folder={folder_chat}
                social="Email"
                handle="contact@dabian.dev"
                link="mailto:contact@dabian.dev"
              />
              <StartMenuFolder
                folder={folder_pics}
                social="Github"
                handle="dab1an"
                link="https://github.com/dab1an"
              />
              <StartMenuFolder
                folder={folder_music}
                social="LinkedIn"
                handle="in/dabian"
                link="https://www.linkedin.com/in/dabian/"
              />
            </section>

            <span className="divider2 h-[2px] w-full"></span>

            <section className="flex flex-col pt-1">
              <h1 className="text-black font-bold text-md pb-2 italic">
                Built Using
              </h1>
              <div className="flex flex-col gap-2">
                <StartMenuFolder
                  folder={react_logo}
                  social="React.js"
                  handle="react.dev"
                  link="https://react.dev/"
                />
                <StartMenuFolder
                  folder={tailwind_logo}
                  social="TailwindCSS"
                  handle="tailwindcss.com"
                  link="https://tailwindcss.com/"
                />
              </div>
            </section>
          </div>
          <div className="h-full start-context-right w-[61%]"></div>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
