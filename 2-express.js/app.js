const express = require("express");
const app = express();
const { people } = require("./data");

const morgan = require("morgan");

app.use(express.static("./methods-public"));

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.listen(3000, () => {
  console.log("Server listens on 3000");
});
