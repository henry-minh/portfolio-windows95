function Portfolio() {
  return (
    <div id="content-container">
      <div id="content-header">
        <h1>Portfolio</h1>
      </div>
      <div id="content-text">
        <h4>Snapcaster.ca</h4>
        <p>
          Magic the Gathering (MTG) is the largest collectable trading card game with roughly 40 million players worldwide. There are over 25,000 unique printed cards in MTG but no website that aggregates the best prices for unpacked single
          cards among local card shops in Canada. With individual card prices ranging from 1¢ up to 2 million dollars, creating a deck can get very expensive.
        </p>
        <p>
          <a href="https://www.snapcaster.ca/" target="_blank" rel="noreferrer">
            Snapcaster
          </a>{" "}
          is an online website I helped{" "}
          <a href="https://www.bryceeppler.com/" target="_blank" rel="noreferrer">
            Bryce Eppler
          </a>{" "}
          develop where players can query for the cheapest cards sold from over 45 Canadain local game stores. Our goal is to promote small Canadian businesses while helping players save as much time and money as possible.
        </p>
        <p>Features include: single search, multi search, sealed search, custom price drop alerts (coming soon).</p>

        <div id="content-skills">
          <p style={{ background: "#EC2049" }}>Python</p>
          <p style={{ background: "#2F9599" }}>TypeScript</p>
          <p style={{ background: "#A7226E" }}>NextJS</p>
          <p style={{ background: "#336B87" }}>Git</p>
          <p style={{ background: "#F9D423" }}>MongoDB</p>
          <p style={{ background: "#FC913A" }}>PostgreSQL</p>
          <p style={{ background: "#FF4E50" }}>Redis</p>
          <p style={{ background: "#99B898", width: "17%" }}>BeautifulSoup</p>
          <p style={{ background: "#F34A4A" }}>FastAPI</p>
          <p style={{ background: "#F26B38" }}>Vercel</p>
          <p style={{ background: "#E8175D" }}>Railway</p>
        </div>
      </div>

      <div id="content-text">
        <h4>A Study on Usable Security and Online Scalping Bots</h4>
        <p>
          This project was developed in collaboration with{" "}
          <a href="https://carleton.ca/scs/people/jean-pierre-corriveau/" target="_blank" rel="noreferrer">
            Professor Jean-Pierre Corriveau
          </a>{" "}
          (Carleton University) for my fourth year Honors project.
        </p>
        <p>
          The goal is to showcase how denial of inventory attacks (Scalping attacks) negatively impact online businesses by developing a tool that can simulate mass users attempting to purchase products online. The inability to distribute
          highly limited inventory appropriately can annoy consumers and result in a reduction in customer retention and possible future revenue.
        </p>
        <p>I developed a functioning automated checkout bot that can concurrently simulate multiple customers purchasing high demand products on web platforms powered by Shopify.</p>
        <p>
          The three main security measures implemented on Shopify includes a web application firewall, queue state, and bot protection. The software developed evaluates the purpose and effectiveness of each of these components from a usable
          security perspective while proposing alternative solutions.
        </p>

        <p>
          The{" "}
          <a href="https://docs.google.com/document/d/1PFFtFtht0j1G-6qpK4L7jKgKUDyKLR9o3rgGptPK4Sg/edit" target="_blank" rel="noreferrer">
            Formal Report
          </a>{" "}
          and{" "}
          <a href="https://github.com/henry-minh/COMP4905-Honours-Henry" target="_blank" rel="noreferrer">
            Github Repo
          </a>{" "}
          are available to view online.
        </p>
        <div id="content-skills">
          <p style={{ background: "#EC2049" }}>Python</p>
          <p style={{ background: "#336B87" }}>Git</p>
          <p style={{ background: "#763626" }}>Selenium</p>
          <p style={{ background: "#F34A4A" }}>QT</p>
          <p style={{ background: "#90AFC5" }}>2Captcha</p>
        </div>
      </div>
      <div id="content-text">
        <h4>QNX Neutrino: Real-Time Warehouse Ordering System</h4>
        <p>
          QNX Neutrino is a Real Time Operating System developed by Blackberry and is commonly used in low level programming. Examples include IOT devices, autonomous vehicles, and sensors in a distributed system. This project focuses on
          how multiple threads need to be scheduled when accessing a shared data structure for an online warehouse ordering system.
        </p>
        <p>Thousands of simulated clients send mass orders to a warehouse server. The server (Running on QNX Neutrino) confirms and fulfill orders in the warehouse while maintaining data integrity.</p>
        <p>
          Inventory data integrity is handled by preventing multiple threads performing transactions on the same resources simultaneously. This is done by implementing mutexes and giving each server thread a unique round-robin scheduling
          priority algorithm based on the client orders.
        </p>
        <p>This was a project where I collaborated with my university peers: Brandon Atkins, Tristan Demers, and Chris Boyd.</p>
        <p>
          The{" "}
          <a href="https://github.com/henry-minh/warehouse" target="_blank" rel="noreferrer">
            Github Repo
          </a>{" "}
          is available to view online.
        </p>
        <div id="content-skills">
          {" "}
          <p style={{ background: "#E8175D" }}>C++</p>
          <p style={{ background: "#EC2049" }}>Python</p>
          <p style={{ background: "#336B87" }}>Git</p>
          <p style={{ background: "#763626" }}>Jira</p>
          <p style={{ background: "#A7226E", width: "15%" }}>QNX Neutrino</p>
          <p style={{ background: "#2F9599", width: "17%" }}>QNX Momentics</p>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
