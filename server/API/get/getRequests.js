const collections = require("../../collections");

module.exports = async (req, res) => {
  const requests = await collections.Visit.find({}).lean();

  if (!requests) {
    res.status(404).send({
      connected: req.session.isConnected,
      msg: "No metrics found",
    });
    return;
  }

  res.status(200).send(requests);
};
