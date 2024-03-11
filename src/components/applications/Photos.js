import "../../styles/Photos.css";
function Photos() {
  return (
    <div id="content-container">
      <div id="content-header">
        <h1>Photography</h1>
        <p style={{ fontSize: "28px" }}>My Travel Photos 📷</p>
      </div>
      <div id="content-text">
        <img src="./korea.png" id="content-photos-app" alt="Korea"></img>
        <p style={{ textAlign: "center", marginTop: "10px" }}>Train Station | 📍 Seoul South Korea</p>
      </div>
      <div id="content-text">
        <img src="./kyoto.png" id="content-photos-app" alt="Kyoto"></img>
        <p style={{ textAlign: "center", marginTop: "10px" }}>Kennin-ji Temple | 📍 Kyoto Japan</p>
      </div>
      <div id="content-text">
        <img src="./tokyo.jpg" id="content-photos-app" alt="Tokyo"></img>
        <p style={{ textAlign: "center", marginTop: "10px" }}>Harajuku Yoyogi Park | 📍 Tokyo Japan</p>
      </div>
      <div id="content-text">
        <img src="./halong.png" id="content-photos-app" alt="Halong Bay"></img>
        <p style={{ textAlign: "center", marginTop: "10px" }}>Hạ Long Bay | 📍 Ha Long Vietnam</p>
      </div>
      <div id="content-text">
        <img src="./vietnam.png" id="content-photos-app" alt="Hanoi"></img>
        <p style={{ textAlign: "center", marginTop: "10px" }}>Hoan Kiem Lake Park | 📍 Hanoi Vietnam</p>
      </div>
    </div>
  );
}
export default Photos;
