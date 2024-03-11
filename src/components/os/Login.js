import { useState } from "react";
import Draggable from "react-draggable";
import "../../styles/Login.css";

function Login({ signInFunction }) {
  const [x, setX] = useState(window.innerWidth / 2 - 180);
  const [y, setY] = useState(window.innerHeight / 3);
  const handleStop = (event, dragElement) => {
    if (dragElement.x < 0) {
      setX(0);
    } else if (dragElement.x > window.innerWidth - 100) {
      setX(0);
    } else {
      setX(dragElement.x);
    }

    if (dragElement.y < 0) {
      setY(0);
    } else if (dragElement.y > window.innerHeight - 88) {
      setY(0);
    } else {
      setY(dragElement.y);
    }
  };
  return (
    <div id="login-container">
      <Draggable handle=".browser-header-container" defaultPosition={{ x: x, y: y }} onStop={handleStop} position={{ x: x, y: y }}>
        <div id="draggable-content" style={{ width: "400px", height: "125px" }}>
          <div id="browser-header-container" className="browser-header-container">
            <p id="browser-header-name">Windows 95</p>
          </div>
          <div id="login-content">
            <div id="login-image-container">
              <img src={"./keys.ico"} alt="keys"></img>
            </div>
            <div id="login-text-container">
              <p>Welcome to my Portfolio Website.</p>
              <button
                onClick={function () {
                  const audio = new Audio("./startupNoise.mp3");
                  audio.play();
                  signInFunction();
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
}
export default Login;
