const express = require("express");
const app = express();
const port = 3000;

app.get("/login", (req, res) => {
  res.sendFile(login.html);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
