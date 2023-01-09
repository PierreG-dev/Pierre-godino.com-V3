const express = require("express");
const app = express();
const api = require("./API");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
require("dotenv").config();

app.use(morgan("combined"));
app.use(cors({ origin: "*", optionSuccessStatus: 200 }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({ secret: "A$h83TkD", resave: false, saveUninitialized: false })
);

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send("Hello world !!");
});

app.post;

app.listen(port, () => {
  console.log("Server app listening on port " + port);
});

// ========== ROUTES ==========//
app.post("/api/newVisit", api.postVisit);
