const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Création du modèle
let schema = new Schema({
  ip: String,
  location: Object,
  date: String,
  timeSpent: Number,
  journey: Array,
});

schema.statics.create = (packet) => {
  let visit = new Visit(packet);
  return visit
    .save()
    .then((snapshot) => {
      return Promise.resolve(snapshot);
    })
    .catch((err) => {
      console.error(
        "Visit.create failed when saving " + packet.username + " ==> ",
        err
      );
      return Promise.reject(err);
    });
};

var Visit;
function make(connection) {
  if (Visit) {
    return Visit;
  }
  Visit = connection.model("Visit", schema);
  return Visit;
}

module.exports = make;
