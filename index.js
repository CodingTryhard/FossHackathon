import express from "express";
import { dirname } from "path";
import bodyParser from "body-parser";

import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/htmls/login.html");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/htmls/home.html");
});

app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/public/htmls/signup.html");
});
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/htmls/login.html");
});
app.post("/dashboard", (req, res) => {
  res.render("dashboard.ejs", {
    username: req.body["Username"],
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
