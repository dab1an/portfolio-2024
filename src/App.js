import React from "react";
import Taskbar from "./components/Taskbar";
import BG from "./components/BG";
import { useState } from "react";

const App = () => {
  const [showWindow, setShowWindow] = useState(true);
  const [showAboutWindow, setShowAboutWindow] = useState(false);

  const handleShowWindow = () => {
    setShowWindow(!showWindow);
  };

  const handleShowAboutWindow = () => {
    setShowAboutWindow(!showAboutWindow);
  };

  return (
    <div className="h-svh flex flex-col ">
      <BG
        showWindow={showWindow}
        showAboutWindow={showAboutWindow}
        handleShowAboutWindow={handleShowAboutWindow}
      />
      <Taskbar handleShowWindow={handleShowWindow} />
    </div>
  );
};

export default App;
