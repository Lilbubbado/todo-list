import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let month = months[d.getMonth()];
let day = d.getDate();
let year = d.getFullYear();
let date = `${month} ${day}, ${year}`;
let todayItems = [];
let workItems = [];

app.get("/", (req, res) => {
  res.render("index.ejs", {items: todayItems, date: date});
});

app.post("/", (req, res) => {
  todayItems.push(req.body.item);
  res.redirect("/");
});

app.get("/work", (req, res) => {
  res.render("work.ejs", {items: workItems, date: date});
});

app.post("/work", (req, res) => {
  workItems.push(req.body.item);
  res.redirect("/work");
});





app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});