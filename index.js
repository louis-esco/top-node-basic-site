const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/:route", (req, res) => {
  const route = req.params.route;
  if (route === "about" || route === "contact-me")
    res.sendFile(path.join(__dirname, `/${route}.html`));
  else res.sendFile(path.join(__dirname, "/404.html"));
});

app.listen(PORT);
