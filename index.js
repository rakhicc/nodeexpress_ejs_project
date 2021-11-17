"use strict";
const { urlencoded } = require("express");
const express = require("express");
const path = require("path");
const app = express();

const { port, host } = require("./config.json");
const menupath = path.join(__dirname, "menu.html");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "pagetemplates"));

app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => res.sendFile(menupath));
app.get("/personform", (req, res) =>
  res.render("form", {
    title: "person data",
    header: "Insert data",
    action: "/handleperson",
  })
);

app.post("/handleperson", (req, res) =>
  res.render("result", {
    title: "person data result",
    header: "Person Info",
    person: req.body,
  })
);
app.listen(port, host, () => console.log(`${host}:${port} listening..`));
