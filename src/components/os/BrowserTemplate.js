import { useState, useCallback } from "react";
import "./browserTemplate.css";
import Draggable from "react-draggable";
import AboutMe from "../applications/AboutMe";

function BrowserTemplate({
    item,
    xValue,
    yValue,
    zValue,
    icon,
    browserContent,
    isRunning,
    hidden,
    maximized,
    maximizeBrowser,
    closeBrowser,
    minmizeBrowser,
    changeBrowserFocus,
}) {
    const [x, setX] = useState(xValue);
    const [y, setY] = useState(yValue);

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
        <div hidden={hidden} id="browser-container" style={{ zIndex: zValue, visibility: isRunning }}>
            <Draggable
                handle=".browser-header-container"
                defaultPosition={{ x: xValue, y: yValue }}
                onStart={changeBrowserFocus}
                onStop={handleStop}
                position={{ x: x, y: y }}
            >
                <div id="draggable-content" style={{ width: maximized ? "100vw" : "60vw" }}>
                    <div id="browser-header-container" className="browser-header-container">
                        <img src={icon} alt="test" id="browser-header-image" className="browser-header-image"></img>

                        <p id="browser-header-name">{item}</p>

                        <div id="browser-header-button-container" className="browser-header-button-container">
                            <div id="testing">
                                {/* min */}
                                <button id="browser-header-buttons" onClick={() => minmizeBrowser(item)}>
                                    <span id="minimize-button"></span>
                                </button>
                                {/* resize */}
                                <button
                                    id="browser-header-buttons"
                                    onClick={() => {
                                        maximizeBrowser(item);
                                        setX(0);
                                        setY(0);
                                    }}
                                >
                                    <span id="maximize-button"></span>
                                </button>
                                {/* close */}
                                <button id="browser-header-buttons" onClick={() => closeBrowser(item)}>
                                    <span id="close-button">X</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div onClick={changeBrowserFocus} id="browser-content" style={{ height: maximized ? "94vh" : "60vh" }}>
                        {browserContent}
                    </div>
                </div>
            </Draggable>
        </div>
    );
}
export default BrowserTemplate;
