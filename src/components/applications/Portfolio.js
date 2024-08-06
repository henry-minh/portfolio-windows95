function Portfolio() {
  return (
    <div id="content-container">
      <div id="content-header">
        <h1>Portfolio</h1>
      </div>
      <div id="content-text">
        <h4>Snapcaster (SaaS)</h4>
        <p>
          <a href="https://www.snapcaster.ca/" target="_blank" rel="noreferrer">
            Snapcaster
          </a>{" "}
          is a website that queries over 4 million Magic the Gathering, Pokemon,
          Yugioh, One Piece TCG and Lorcana trading cards sold in Canada across
          72 Canadian local game stores. It allows users to efficiently search
          multiple websites simultaneously, aggregating the cheapest options in
          a single convenient location.
        </p>

        <p>
          Snapcaster also provides custom advertising, analytics, and tools for
          the biggest online hobby retailers Canada including: Obsidian Games,
          Levelup Games, Chimera Games, and Exor Games.
        </p>

        <p>
          Snapcaster Generates roughly 30,000 page visits a month and an average
          of 5000 unique monthly visitors including free and paid subscribers.
        </p>
        <p>
          In March 2024 we launched our paid subscription service model which
          includes multi search, premium advanced search, alongside our free
          single search service.
        </p>
        <p>Key Performance Indicators</p>
        
        <ul style={{fontSize:"1.4em"}}>
          <li>Snapcaster receives 30,000 page visits per month</li>
          <li>Snapcaster receives 5000 unique visitors per month</li>
          <li>Snapcaster receives an 8 minute average retention time</li>
          <li>The top 5 local game stores we redirect traffic to average 1,000 redirect conversions every month.</li>
          <li>Translated $10,000 in direct sales during a single advertising campagin with Obisidian Games.</li>
          <li>Doubled Obsidian Game’s first time visitors and retaining users since June 2024 and maintained these numbers to date.</li>
        </ul>

        <p>
          Documentation:{" "}
          <a target="_none" href="https://snapcaster-docs.vercel.app/">
            here
          </a>
        </p>

        <p>
          Front End Repo:{" "}
          <a
            target="_none"
            href="https://github.com/bryceeppler/snapcaster-client"
          >
            here
          </a>
        </p>

        <div id="content-skills">
          <p style={{ background: "#EC2049" }}>Python</p>
          <p style={{ background: "#2F9599" }}>TypeScript</p>
          <p style={{ background: "#A7226E" }}>NextJS</p>
          <p style={{ background: "#336B87" }}>Git</p>
          <p style={{ background: "#FF4E50" }}>AWS</p>
          <p style={{ background: "#E8175D" }}>Railway</p>
          <p style={{ background: "#F34A4A" }}>FastAPI</p>
          <p style={{ background: "#F9D423" }}>MongoDB</p>
          <p style={{ background: "#FC913A" }}>PostgreSQL</p>
          <p style={{ background: "#99B898" }}>Docker</p>
          <p style={{ background: "#F26B38" }}>Postman</p>
          <p style={{ background: "#763626" }}>Selenium</p>
          <p style={{ background: "#FF4E50" }}>Google Analytics</p>
        </div>
      </div>

      <div id="content-text">
        <h4>A Study on Usable Security and Online Scalping Bots</h4>
        <p>
          This project was developed in collaboration with{" "}
          <a
            href="https://carleton.ca/scs/people/jean-pierre-corriveau/"
            target="_blank"
            rel="noreferrer"
          >
            Professor Jean-Pierre Corriveau
          </a>{" "}
          (Carleton University) for my fourth year Honours project.
        </p>
        <p>
          The goal is to showcase how denial of inventory attacks (Scalping
          attacks) negatively impact online businesses by developing a tool that
          can simulate mass users attempting to purchase products online. The
          inability to distribute highly limited inventory appropriately can
          annoy consumers and result in a reduction in customer retention and
          possible future revenue.
        </p>
        <p>
          I developed a functioning automated checkout bot that can concurrently
          simulate multiple customers purchasing high demand products on web
          platforms powered by Shopify.
        </p>
        <p>
          The three main security measures implemented on Shopify includes a web
          application firewall, queue state, and bot protection. The software
          developed evaluates the purpose and effectiveness of each of these
          components from a usable security perspective while proposing
          alternative solutions.
        </p>

        <p>
          The{" "}
          <a
            href="https://docs.google.com/document/d/1PFFtFtht0j1G-6qpK4L7jKgKUDyKLR9o3rgGptPK4Sg/edit"
            target="_blank"
            rel="noreferrer"
          >
            Formal Report
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/henry-minh/COMP4905-Honours-Henry"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
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
          QNX Neutrino is a Real Time Operating System developed by Blackberry
          and is commonly used in low level programming. Examples include IOT
          devices, autonomous vehicles, and sensors in a distributed system.
          This project focuses on how multiple threads need to be scheduled when
          accessing a shared data structure for an online warehouse ordering
          system.
        </p>
        <p>
          Thousands of simulated clients send mass orders to a warehouse server.
          The server (Running on QNX Neutrino) confirms and fulfill orders in
          the warehouse while maintaining data integrity.
        </p>
        <p>
          Inventory data integrity is handled by preventing multiple threads
          performing transactions on the same resources simultaneously. This is
          done by implementing mutexes and giving each server thread a unique
          round-robin scheduling priority algorithm based on the client orders.
        </p>
        <p>
          This was a project where I collaborated with my university peers:
          Brandon Atkins, Tristan Demers, and Chris Boyd.
        </p>
        <p>
          The{" "}
          <a
            href="https://github.com/henry-minh/warehouse"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
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
