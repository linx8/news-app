import React from "react";

const Articles = ({ articles }) =>
  articles.map((article) => (
    <div key={`article-${article.id}`} className="article">
      <h4>{article.webTitle}</h4>
      <input type="checkbox" name="pinned" />
    </div>
  ));

export default Articles;
