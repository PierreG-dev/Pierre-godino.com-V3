require("dotenv").config();
//========== DATABASE ==========//
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

//Connexion au serveur NoSQL
const db_url = process.env.DB_URL || "mongodb://localhost/VITRINE";

let connection;
function tryConnect() {
  console.log("trying " + db_url);
  connection = mongoose.createConnection(db_url, (err) => {
    if (err) {
      console.error("MongoDB connection error: ", err);
    } else {
      console.log("MongoDB connexion success");
    }
  });
}

tryConnect();

const Visit = require("./visit.js")(connection);

const collections = {
  Visit,
  connection,
};

module.exports = collections;
