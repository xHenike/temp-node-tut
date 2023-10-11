const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("customer hit the source");
  res.status(200).send("home page");
});

app.get("/about", (req, res) => {
  res.status(200).send("about page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
