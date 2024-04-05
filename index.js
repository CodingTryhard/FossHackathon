import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
