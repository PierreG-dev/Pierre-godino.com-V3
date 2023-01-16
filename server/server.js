const express = require("express");
const app = express();
const api = require("./API");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
require("dotenv").config();

app.use(morgan("combined"));
app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    name: "session",
    secret: "A$h83TkD",
    resave: false,
    saveUninitialized: false,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
  })
);

const port = process.env.PORT || 8000;

app.post;

app.listen(port, () => {
  console.log("Server app listening on port " + port);
});

// ========== AUTH ==========//
app.get("/isConnected", (req, res) => {
  res.status(200).send({ connected: req.session.isConnected });
});

app.post("/auth", (req, res) => {
  if (req.session.isConnected) {
    res.status(200).send({
      connected: true,
      msg: "Already Connected",
    });
    return;
  }
  if (!req.body.password) {
    res.status(401).send({
      connected: false,
      msg: "Missing parameters",
    });
    return;
  }
  if (req.body.password !== process.env.ADMIN_PASSWORD) {
    res.status(401).send({
      connected: false,
      msg: "Wrong password",
    });
    return;
  }

  req.session.isConnected = true;
  res.status(200).send({
    connected: true,
    msg: "You are now connected",
  });
});

// ========== ROUTES ==========//
app.get("/getMetrics", api.getMetrics);

app.post("/newVisit", api.postVisit);

app.put("/updateVisitJourney", api.putVisitJourney);
app.put("/updateVisitTime", api.putVisitTime);
