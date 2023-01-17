const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Création du modèle
let schema = new Schema({
  name: String,
  message: String,
});

schema.statics.create = (packet) => {
  let request = new Request(packet);
  return request
    .save()
    .then((snapshot) => {
      return Promise.resolve(snapshot);
    })
    .catch((err) => {
      console.error(
        "Request.create failed when saving " + packet.username + " ==> ",
        err
      );
      return Promise.reject(err);
    });
};

var Request;
function make(connection) {
  if (Request) {
    return Request;
  }
  Request = connection.model("Request", schema);
  return Request;
}

module.exports = make;
