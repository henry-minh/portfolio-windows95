function Snapcaster() {
  return (
    <div id="content-container">
      <div id="content-header">
        <h1>Snapcaster</h1>
      </div>
      <div id="content-text">
        <h1>Journey at Snapcaster</h1>

        <p>
          In June 2023 I began working with Bryce to help co-develop Snapcaster. Originally all the data was being web scraped in real time server side using Beautiful Soup which was a huge concern from a scalability
          perspective. I had experience web scraping websites and pushed to store all the card data routinely into a mongo database since it's cheap and perfect for storing large amounts of JSON formatted data.
        </p>

        <p>
          After implementing the mongo service and integrating it with our built-in search API and taking some time off in the fall the next hurdle was determining monthly server costs. This was our first project where
          we had to worry about storing millions of entries of data and were very concerned about calculating how read/write operation would affect our server costs. After a month of researching cloud storage options and
          researching best practices when indexing our database, we finally had a strong understanding on our monthly server costs and felt comfortable to develop more features.
        </p>

        <p>
          The next major feature I worked on was a new Advanced Search Module and API endpoint for our premium subscribers. A key responsibility of mine is to standardize data collection across the 70 different websites.
          I redesigned our web scraper to store more granular information about the card the user could apply a search filter. We were then able to reuse alot of our code to be able to support multiple trading card games such as Pokemon, Yugioh, Lorcana, and OnePiece TCG.
        </p>

        <p>
          Today, we have signed contracts with the largest retailers in Canada to provide all inclusive advertising, analytics, and dashboard tools to help promote indivdual store owners. In July 2024, we've added a couple of new developers to the project and i've taken the responsibility of onboarding and managing their responsibilities.
        </p>

        <p style={{ fontWeight: "bold" }}>GitHub repo access and a temporary Snapcaster premium key can be given upon request.</p>
      </div>
      <img src="./advancedSearch.jpg" id="content-photo" alt="Advanced Search" style={{ paddingBottom: "2rem" }}></img>
    </div>
  );
}
export default Snapcaster;
