const express = require("express");
const app = express();
const { getResponse, getList } = require("./utils");
const PORT = process.env.PORT || 8080;

app.get("/api", (req, res) => {
  const data = getList();
  res.send(data);
});

app.get("/api/:article", (req, res) => {
  const { article } = req.params;
  const data = getResponse(article);
  res.send(data);
});

app.listen(PORT, () => {
  console.log("listening");
});
