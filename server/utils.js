const path = require("path");
const fs = require("fs");

function getResponse(page) {
  const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, "data.json"), "utf-8")
  );
  return data[page];
}

function getList() {
  const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, "list.json"), "utf-8")
  );
  return data;
}

module.exports = { getResponse, getList };
