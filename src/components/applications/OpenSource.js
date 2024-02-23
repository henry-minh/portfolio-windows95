function OpenSource() {
    return (
        <div id="content-container">
            <div id="content-header">
                <h1>Open Source </h1>
            </div>
            <div id="content-text">
                <h4>Snapcaster API</h4>
                <p>
                    <a href="https://github.com/bryceeppler/snapcasterv2-api" target="_blank">
                        Snapcaster API
                    </a>{" "} is the open source tool that powers Snapcaster's search queries. Queries are powered by FastAPI and Beautiful Soup which allow users to search for the cheapest single cards, multi search, and sealed packs.
                </p>
                <p>All POST queries are stored into a PostgreSQL database for analytic purposes. For example, Snapcaster.ca recieves about 15,000 queries a month which we can use for features such as ranking popular cards. 
                </p>
                <p>Search results are also cached into a Redis database for 2 minutes by default to help minimize rate limitation when webscraping the 45+ websites.</p>
                <p>
                    Users can run "updateSets.py" to update the search bar autofill feature with the newest card sets from <a href="https://mtgjson.com/" target="_blank">MTG JSON</a>.
                </p>
                <p>
                    Currently we are looking to expand the game store list to all Canadian retailors listed on{" "}
                    <a href="https://docs.google.com/spreadsheets/d/1E-P-i_ndVp5vdw0hB0xtH8EAyHOOq15Lp_GK1VTZcSo/edit#gid=0" target="_blank">
                        Spellseeker
                    </a>
                </p>
            </div>
        </div>
    );
}
export default OpenSource;
