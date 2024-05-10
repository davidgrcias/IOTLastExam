import React from "react";
import { Helmet } from "react-helmet";

function CategoryDetails({ category }) {
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="templatetravela/halo.css" />
      </Helmet>
      <h1> {category}</h1>
    </div>
  );
}

export default CategoryDetails;
