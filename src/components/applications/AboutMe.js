import "../../styles/AboutMe.css";
function AboutMe() {
  return (
    <div id="content-container">
      <div id="content-header">
        <h1>Biography</h1>
        <p style={{ fontSize: "28px" }}>Henry Nguyen</p>
      </div>

      <div id="content-text">
        <h4>About Me</h4>
        <p>I'm a full-stack software developer with a passion for creating unique web experiences. I have experience developing with cloud services, a variety of back-end and front-end frameworks.</p>

        <p>
          From an early age, I always had a deep fascination for technology and how things worked. This curiosity evolved into a genuine passion after I learned Java in my high school programming class which guided my journey as a software
          developer.
        </p>

        <p>I graduated in the Computer Science Honours program at Carleton University in 2023. Here I learned how to work in Agile enviornments thourgh SCRUM, software quality assurance, and systems security.</p>
        {/*
        <div id="content-skills">
          <p style={{ background: "#A7226E" }}>ReactJS</p>
          <p style={{ background: "#EC2049" }}>Python</p>
          <p style={{ background: "#F26B38" }}>Java</p>
          <p style={{ background: "#E8175D" }}>C++</p>
          <p style={{ background: "#2F9599" }}>JavaScript</p>
          <p style={{ background: "#90AFC5" }}>SQL</p>
          <p style={{ background: "#F9D423" }}>MongoDB</p>
          <p style={{ background: "#FC913A" }}>PostgreSQL</p>
          <p style={{ background: "#336B87" }}>Redis</p>
          <p style={{ background: "#99B898" }}>Spring Boot</p>
          <p style={{ background: "#763626" }}>NextJS</p>
          <p style={{ background: "#F34A4A" }}>FastAPI</p>
          <p style={{ background: "#FF4E50" }}>AWS</p>
        </div>
        

        <img src="./henry.png" id="content-photo" alt="Henry"></img>
        */}
        <img src="./henry2.png" id="content-photo" alt="Henry"></img>
      </div>

      <div id="content-text">
        <h4>Hobbies</h4>
        <h5>Music</h5>
        <p>
          Recently I've been recording guitar covers with an audio interface and FL Studio. Music that I grew up listening to include bands such as Rise Against, Iron Maiden, and Mastodon. My current reccomendation that I've been enjoying
          is an instrumental band that goes by Polyphia.
        </p>

        <h5>Sports</h5>
        <p>I like to stay active by taking part in recreational sports leagues. In the summer months I primarily play soccer in an open league or golf with my friends.</p>

        <h5>Gundam</h5>
        <p>
          Gundam is a long running science fiction franchise that revolves around military mech suits. In the past few months I started getting into building Gundam mech models. My current project I'm working on is the "Unicorn 02 Banshee",
          a collaboration with the appareal brand Nike.
        </p>
        <img src="./gundam.jpg" id="content-photo" alt="nike sb gundam"></img>
      </div>
      <div id="content-text">
        <h4>Volunteer Work</h4>
        <p>
          In my spare time I volunteer at{" "}
          <a href="https://rockyroadrescue.com/" target="_blank" rel="noreferrer">
            Rocky Road Rescue
          </a>
          , a local dog shelter in Ottawa Ontario.
        </p>
        <p>I drive foster dogs to their vet appointments and deliver donated supplies to foster families across the city. I also help as a dog handler at local fundrasing events.</p>
        <p>
          I was inspired after my sibling reached out to me in 2022 to help temporarily house a rescue dog named Teddy for Paws Across the Water. The biggest takeaway I took was how important it is to promote responsible pet ownership. I
          want to take this unique opportunity to promote a more positive and compassionate community for dogs and pet owners!
        </p>
        <img src="./dog.jpg" id="content-photo" alt="Tikanaa Meet and Greet"></img>
      </div>

      <div id="content-text">
        <h4>Socials</h4>
        <p> You can reach out to me through any of my socials down below or by email at "henry.minh.n@gmail.com".</p>
        <div id="social-button-container">
          <p>
            <a href="https://www.linkedin.com/in/henry-minh-n/" target="_blank" rel="noreferrer">
              <img src="./linkedIn.png" id="content-socials-button-linkedIn" alt="LinkedIn Icon"></img>
            </a>
          </p>
          <p>
            <a href="https://github.com/henry-minh" target="_blank" rel="noreferrer">
              <img src="./github.png" id="content-socials-button-github" alt="Github Icon"></img>
            </a>
          </p>
        </div>
      </div>
      <br />
    </div>
  );
}
export default AboutMe;
