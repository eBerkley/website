const express = require("express");
const serverless = require("serverless-http");
const app = express();
const { getResponse, getList } = require("./utils");
const router = express.Router();

router.get("/", (req, res) => {
  const data = getList();
  res.send(data);
});

router.get("/:article", (req, res) => {
  const { article } = req.params;
  const data = getResponse(article);
  if (data) {
    res.send(data);
  } else {
    res.send(`Sorry, we were unable to locate any articles named ${article}.`);
  }
});

app.use("/.netlify/functions/api", router);

app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "../build", "index.html"))
);

module.exports = app;
exports.handler = serverless(app);
