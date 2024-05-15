import React from "react";
import VideoHeader from "./VideoHeader"; // Adjust the path if necessary
import { Helmet } from "react-helmet";
import HomeContent from "./HomeContent"; // Adjust the path if necessary
import Cursor from "./cursor";

// import "./Home.css";

function Home() {
  return (
    <div className="App">
      {/*<Helmet>
        <link rel="stylesheet" href="templatetravela/lightbox.min.css" />
        <link rel="stylesheet" href="templatetravela/owl.carousel.min.css" />
        <link rel="stylesheet" href="templatetravela/bootstrap.min.css" />
      </Helmet>*/}
      <Cursor />
      <HomeContent />
    </div>
  );
}

export default Home;
