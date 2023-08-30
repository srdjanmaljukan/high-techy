import React from "react";
import {Helmet} from "react-helmet-async";

function Meta({title, description, keywords}) {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
    title: "Welcome to HighTechy",
    description: "Cheapest high tech products in the world",
    keywords: "electronics, tech, cheap electronics, buy electronics"
}

export default Meta;