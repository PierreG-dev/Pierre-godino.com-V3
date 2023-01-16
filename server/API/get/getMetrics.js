const collections = require("../../collections");

module.exports = async (req, res) => {
  if (!req.session.isConnected) {
    res.status(401).send({
      connected: req.session.isConnected,
      msg: "Access denied",
    });
    return;
  }
  const metrics = await collections.Visit.find({}).lean();

  if (!metrics) {
    res.status(404).send({
      connected: req.session.isConnected,
      msg: "No metrics found",
    });
    return;
  }

  res.status(200).send(metrics);
};
