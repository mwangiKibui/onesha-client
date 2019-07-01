const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + "/public/"));
app.get(/.*/, (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT);
