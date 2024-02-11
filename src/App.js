import React from "react";
import Taskbar from "./components/Taskbar";
import BG from "./components/BG";
import StartButton from "./components/StartButton";

const App = () => {
  return (
    <div className="h-screen">
      <BG />
      <Taskbar />
    </div>
  );
};

export default App;
