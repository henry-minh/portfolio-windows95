import "./TaskBarButtons.css";
function TaskBarButtons({ item, icon, clickTaskbarIcon, taskbarClassName }) {
    return (
        <div id="taskbar-buttons" className={taskbarClassName} onClick={clickTaskbarIcon(item)}>
            <img src={icon} id="desktop-button-image"></img>
            <p>{item}</p>
        </div>
    );
}
export default TaskBarButtons;
