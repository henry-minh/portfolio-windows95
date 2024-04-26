function Snapcaster() {
  return (
    <div id="content-container">
      <div id="content-header">
        <h1>Snapcaster</h1>
      </div>
      <div id="content-text">
        <h4>Snapcaster Contributions</h4>

        <p>
          In June 2023 I began working with Bryce to help co-develop Snapcaster. Originally all the data was being web scraped in real time server side using Beautiful Soup which was a huge concern from a scalability
          perspective. I had experience web scraping websites and pushed to store all the card data routinely into a mongo database since it's cheap and perfect for storing large amounts of JSON formatted data.
        </p>

        <p>
          {" "}
          After implementing the mongo service and integrating it with our built-in search API and taking some time off in the fall the next hurdle was determining monthly server costs. This was our first project where
          we had to worry about storing millions of entries of data and were very concerned about calculating how read/write operation would affect our server costs. After a month of researching cloud storage options and
          researching best practices when indexing our database, we finally had a strong understanding on our monthly server costs and felt comfortable to develop more features.
        </p>

        <p>
          The next major feature I worked on was a new Advanced Search Module and API endpoint for our premium subscribers. A key responsibility of mine is to standardize data collection across the 70 different websites.
          I redesigned our web scraper to store more granular information about the card the user could apply a search filter. Examples of filters include foil types, set, card frame, etc. I also developed the front end
          for the advanced search service using Typescript and TailwindCSS in NextJS (see down below).
        </p>

        <p>
          In recent months, I have begun collaborating with store owners such as{" "}
          <a href="https://red-dragon.ca/" target="_none">
            Red Dragon Ottawa
          </a>{" "}
          to provide marketplace trends and analytics to help them competitively price their products, boost user engagement, as well as advertise their business on Snapcaster.
        </p>

        <p style={{ fontWeight: "bold" }}>GitHub repo access and a temporary Snapcaster premium key can be given upon request.</p>
      </div>
      <img src="./advancedSearch.png" id="content-photo" alt="Advanced Search" style={{ paddingBottom: "2rem" }}></img>
    </div>
  );
}
export default Snapcaster;
