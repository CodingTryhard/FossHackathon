import express from "express";
import { dirname } from "path";
import bodyParser from "body-parser";

import { fileURLToPath } from "url";
import { error } from "console";

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
  res.sendFile(__dirname + "/public/htmls/dashboard.html");
});

app.get("/calender", (req, res) => {
  res.sendFile(__dirname + "/public/htmls/calender.html");
});
app.get("/youtube", (req, res) => {
  res.sendFile(__dirname + "/public/htmls/youtube.html");
});
app.post("/youtube_page", (req, res) => {
  let originalString = req.body["link"];

  let newString = originalString.replace("watch?v=", "embed/");

  try {
    res.render("youtube_page.ejs", {
      newString: newString,
    });
  } catch (e) {
    res.send("Invalid Youtube link");
  }
});
app.get("/pomodoro", (req, res) => {
  res.sendFile(__dirname + "/public/htmls/pomodoro.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
