const express = require("express");
const bodyParser = require("body-parser");
const { json } = require("body-parser");

const api = require("./api/index");

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/news-search", async (req, res) => {
  const response = await api.searchArticles(req.query.q);
  res.send(response);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
