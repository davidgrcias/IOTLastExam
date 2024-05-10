import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

function CategoryDetails() {
  const { category } = useParams(); // Use useParams to get the category
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="templatetravela/halo.css" />
      </Helmet>
      <h1>{category}</h1> {/* Display the category */}
    </div>
  );
}

export default CategoryDetails;
