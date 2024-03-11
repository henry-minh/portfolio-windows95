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
        <p>
          Welcome to my portfolio website! I'm a full-stack software developer with a passion for creating unique web experiences. I have experience developing with cloud services, a variety of back-end and front-end frameworks, and
          developing SaaS for thousands of users.
        </p>

        <p>
          From an early age, I always had a deep fascination for technology and how things worked. This curiosity evolved into a genuine passion after I learned Java in my high school programming class which guided my journey as a software
          developer.
        </p>

        <p>
          I graduated in the Computer Science Honours program at Carleton University in 2023. Here I learned about system security, cryptography, and software quality assurance. Despite attending school during a pandemic, I've become good
          friends with many of my peers, some of which I still collaborate with on projects to this day.
        </p>
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
          <p style={{ background: "#763626" }}>Django</p>
          <p style={{ background: "#F34A4A" }}>FastAPI</p>
          <p style={{ background: "#FF4E50" }}>AWS</p>
        </div>

        <img src="./henry.png" id="content-photo" alt="Henry"></img>
      </div>

      <div id="content-text">
        <h4>Hobbies</h4>
        <h5>Music</h5>
        <p>
          I've been playing guitar since the start of high school. I enjoy playing music in the punk rock and metal genre including songs From Rise Against, Iron Maiden, and Mastodon. Recently I've been fascinated with Tim Henson and Scott
          LePage from the band Polyphia for their unique use of hybrid picking.
        </p>

        <h5>Golf</h5>
        <p>During the summer months you can find me at the driving range and the golf course with friends and family. I really enjoy being outside and the casual nature when you're out with friends with a couple of drinks.</p>

        <h5>Building Gundam Figures</h5>
        <p>As a fan of the franchise, I've been getting into building Gundam mech figurines. My current project I'm working on is the "Gundam x Nike SB Unicorn 02 Banshee".</p>
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
          I was inspired after my older sibling reached out to me last year to help temporarily house a rescue dog named Teddy for Paws Across the Water. The biggest takeaway I took was how important it is to promote responsible pet
          ownership. I want to take this unique opportunity to promote a more positive and compassionate community for dogs and pet owners!
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
