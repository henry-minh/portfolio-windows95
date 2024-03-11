import "./App.css";
import Desktop from "./components/os/desktop.js";
// import { useState } from "react";
function App() {
  return (
    <div
      className="App"
      onClick={function () {
        const audio = new Audio("./clickNoise.mp3");
        audio.play();
      }}
    >
      <Desktop></Desktop>
    </div>
  );
}

export default App;
