import React from "react";

const ArticleResults = ({ articles }) => {
  return articles.map((article) => (
    <div key={`article-${article.id}`} className="article">
      <h2>{article.webTitle}</h2>
    </div>
  ));
};

export default ArticleResults;
