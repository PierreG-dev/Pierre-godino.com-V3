const collections = require("../../collections");

module.exports = async (req, res) => {
  if (!req.body.name || !req.body.message) {
    res.status(401).send({
      connected: false,
      msg: "Missing parameters",
    });
    return;
  }

  collections.Request.create({
    name: req.body.name,
    message: req.body.message,
  })
    .then(() => {
      res.status(200).send("well received !");
    })
    .catch((error) => {
      console.error("Error when creating the new Request", error);
      res.status(500).send("Error when creating the Request");
    });
};
