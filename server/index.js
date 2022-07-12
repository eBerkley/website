const express = require("express");
const app = express();
const path = require("path");
const { getResponse, getList } = require("./utils");
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../build")));

app.get("/api", (req, res) => {
  const data = getList();
  res.send(data);
});

app.get("/api/:article", (req, res) => {
  const { article } = req.params;
  const data = getResponse(article);
  if (data) {
    res.send(data);
  } else {
    res.send(`Sorry, we were unable to locate any articles named ${article}.`);
  }
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(PORT, () => {
  console.log("listening");
});
