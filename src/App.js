import React from "react";
import Taskbar from "./components/Taskbar";
import BG from "./components/BG";
import { useState } from "react";

const App = () => {
  const [showWindow, setShowWindow] = useState(true);

  const handleShowWindow = () => {
    setShowWindow(!showWindow);
  };

  return (
    <div className="h-screen">
      <BG showWindow={showWindow} />
      <Taskbar handleShowWindow={handleShowWindow} />
    </div>
  );
};

export default App;
