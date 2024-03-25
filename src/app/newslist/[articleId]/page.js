import React from "react";

const ArticleDetails = ({ params }) => {
  console.log(params, "params");
  return <div>ArticleDetails of {params.articleId}</div>;
};

export default ArticleDetails;
