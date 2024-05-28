import "../../styles/Login.css";

function Login({ signInFunction }) {
  return (
    <div id="login-container">
      <div id="login-browser">
        <div id="draggable-content" style={{ width: "55vw", height: "14vh", maxWidth: "400px", maxHeight: "125px", position: "relative" }}>
          <div id="browser-header-container" className="browser-header-container" style={{ cursor: "auto" }}>
            <p id="browser-header-name">Windows 95</p>
          </div>
          <div id="login-content">
            <div id="login-image-container">
              <img src={"./keys.ico"} alt="keys"></img>
            </div>
            <div id="login-sub-container-2">
              <div>
                <p>Welcome to my Portfolio Website.</p>
              </div>

              <div>
                <button
                  onClick={function () {
                    const audio = new Audio("./startupNoise.mp3");
                    audio.play();
                    signInFunction();
                  }}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
