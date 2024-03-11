import "../../styles/desktop.css";
import { useState, useCallback, useEffect } from "react";
import BrowserTemplate from "./BrowserTemplate";

import startBtn from "../../browserIcons/startBtn.PNG";

import copmuterIcon from "../../browserIcons/ComputerIcon.ico";
import desktopIcon from "../../browserIcons/DesktopIcon.ico";
import notepadIcon from "../../browserIcons/NotepadIcon.ico";
import folderIcon from "../../browserIcons/FolderIcon.ico";
import pictureIcon from "../../browserIcons/PictureIcon.ico";

import AboutMe from "../applications/AboutMe.js";
import Portfolio from "../applications/Portfolio.js";
import Resume from "../applications/Resume.js";
import Snapcaster from "../applications/Snapcaster.js";
import Photos from "../applications/Photos.js";
import TaskBarButtons from "./TaskBarButtons";
import Login from "./Login";
function Desktop() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);
  const [z, setZ] = useState(1);
  const [logIn, setLogIn] = useState(true);
  const [items, setItems] = useState([
    {
      key: 0,
      browserName: "About Me",
      taskBarClassName: "taskbar-unselected",
      state: false,
      zPosition: 1,
      xPosition: 100,
      yPosition: 0,
      maximized: false,
      hidden: false,
      icon: copmuterIcon,
      browserContent: <AboutMe />,
    },
    {
      key: 1,
      browserName: "Portfolio",
      taskBarClassName: "taskbar-unselected",
      state: false,
      zPosition: 1,
      xPosition: 125,
      yPosition: 35,
      maximized: false,
      hidden: false,
      icon: desktopIcon,
      browserContent: <Portfolio />,
    },
    {
      key: 2,
      browserName: "Resume",
      taskBarClassName: "taskbar-unselected",
      state: false,
      zPosition: 1,
      xPosition: 150,
      yPosition: 70,
      maximized: false,
      hidden: false,
      icon: notepadIcon,
      browserContent: <Resume />,
    },
    {
      key: 3,
      browserName: "Snapcaster",
      taskBarClassName: "taskbar-unselected",
      state: false,
      zPosition: 1,
      xPosition: 175,
      yPosition: 105,
      maximized: false,
      hidden: false,
      icon: folderIcon,
      browserContent: <Snapcaster />,
    },
    {
      key: 4,
      browserName: "Photos",
      taskBarClassName: "taskbar-unselected",
      state: false,
      zPosition: 1,
      xPosition: 200,
      yPosition: 140,
      maximized: false,
      hidden: false,
      icon: pictureIcon,
      browserContent: <Photos />,
    },
  ]);

  // Open, Minimize, Maximize, Close Browser Functions
  const addBrowser = useCallback(
    (browserTitle) => () => {
      setZ(z + 1);

      setItems(items.map((item) => (item.browserName === browserTitle ? { ...item, hidden: false, state: true, zPosition: z, taskBarClassName: "taskbar-selected" } : { ...item, taskBarClassName: "taskbar-unselected" })));
      console.log(items);
    },
    [z, items]
  );

  const minmizeBrowser = useCallback(
    (id) => {
      console.log(id);
      setItems(items.map((item) => (item.browserName === id ? { ...item, hidden: !item.hidden } : item)));
    },
    [items]
  );

  const maximizeBrowser = useCallback(
    (id) => {
      console.log(id);
      setItems(items.map((item) => (item.browserName === id ? { ...item, maximized: !item.maximized } : item)));
    },
    [items]
  );

  const closeBrowser = useCallback(
    (id) => {
      console.log(id);
      setItems(items.map((item) => (item.browserName === id ? { ...item, state: false, maximized: false } : item)));
    },
    [items]
  );

  //changeBrowser Z Index and Change taskbar application list's CSS
  const changeBrowserFocus = useCallback(
    (browserTitle) => () => {
      setZ(z + 1);
      setItems(items.map((item) => (item.browserName !== browserTitle ? { ...item, taskBarClassName: "taskbar-unselected" } : item)));
      setItems(items.map((item) => (item.browserName === browserTitle ? { ...item, hidden: false, zPosition: z, taskBarClassName: "taskbar-selected" } : { ...item, taskBarClassName: "taskbar-unselected" })));
      console.log(items);
    },
    [z, items]
  );
  const signInFunction = () => {
    setLogIn(false);
  };
  return (
    <div className="Desktop">
      {logIn === true && <Login signInFunction={signInFunction}></Login>}
      {items.map(
        (item) =>
          item.state === true && (
            <BrowserTemplate
              key={item.key}
              item={item.browserName}
              xValue={item.xPosition}
              yValue={item.yPosition}
              zValue={item.zPosition}
              icon={item.icon}
              browserContent={item.browserContent}
              hidden={item.hidden}
              maximized={item.maximized}
              maximizeBrowser={maximizeBrowser}
              closeBrowser={closeBrowser}
              minmizeBrowser={minmizeBrowser}
              changeBrowserFocus={changeBrowserFocus(item.browserName)}
            ></BrowserTemplate>
          )
      )}
      {/* Window Popup */}
      <div id="desktop-shortcut-container" draggable>
        <button id="desktop-shortcut-button" onClick={addBrowser("About Me")}>
          <img src="./ComputerIcon.ico" id="desktop-button-image" alt="Computer"></img>
          <p id="desktop-shortcut-text">About Me</p>
        </button>
      </div>
      <div id="desktop-shortcut-container">
        <button id="desktop-shortcut-button" onClick={addBrowser("Portfolio")}>
          <img src="./Desktop.ico" id="desktop-button-image" alt="Desktop"></img>
          <p id="desktop-shortcut-text">Portfolio</p>
        </button>
      </div>
      <div id="desktop-shortcut-container">
        <button id="desktop-shortcut-button" onClick={addBrowser("Resume")}>
          <img src="./Notepad.ico" id="desktop-button-image" alt="Notepad"></img>
          <p id="desktop-shortcut-text">Resume</p>
        </button>
      </div>
      <div id="desktop-shortcut-container" onClick={addBrowser("Snapcaster")}>
        <button id="desktop-shortcut-button">
          <img src="./FolderIcon.ico" id="desktop-button-image" alt="Folder"></img>
          <p id="desktop-shortcut-text">Snap Caster</p>
        </button>
      </div>
      <div id="desktop-shortcut-container">
        <button id="desktop-shortcut-button" onClick={addBrowser("Photos")}>
          <img src="./PictureIcon.ico" id="desktop-button-image" alt="Pictures"></img>
          <p id="desktop-shortcut-text">Photos</p>
        </button>
      </div>

      <div id="footer">
        <input type="image" src={startBtn} alt="text" id="footer-start-button"></input>

        {items.map((item) => item.state === true && <TaskBarButtons key={item.key} item={item.browserName} icon={item.icon} taskbarClassName={item.taskBarClassName} clickTaskbarIcon={changeBrowserFocus}></TaskBarButtons>)}

        <div id="taskbar-time-containter">
          <p>
            <p>{time.toLocaleTimeString()}</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Desktop;
