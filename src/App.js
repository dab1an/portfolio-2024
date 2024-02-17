import React from "react";
import Taskbar from "./components/Taskbar";
import BG from "./components/BG";
import { useState } from "react";

import "./fonts/Tahoma_Regular_font.ttf";

const App = () => {
  const [showWindow, setShowWindow] = useState(true);

  const handleShowWindow = () => {
    setShowWindow(!showWindow);
  };

  return (
    <div className="h-svh flex flex-col ">
      <BG showWindow={showWindow} />
      <Taskbar handleShowWindow={handleShowWindow} />
    </div>
  );
};

export default App;
