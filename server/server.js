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
    origin: ["http://localhost:3000", "http://pierre-godino.com"],
    optionSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({ secret: "A$h83TkD", resave: false, saveUninitialized: false })
);
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   if (req.method == "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//     return res.status(200).json({});
//   }

//   next();
// });

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
app.get("/getMetrics", api.getMetrics);

app.post("/newVisit", api.postVisit);

app.put("/updateVisitJourney", api.putVisitJourney);
app.put("/updateVisitTime", api.putVisitTime);
