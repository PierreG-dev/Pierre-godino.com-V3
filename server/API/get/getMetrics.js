const collections = require("../../collections");

module.exports = async (req, res) => {
  const metrics = await collections.Visit.find({}).lean();

  if (!metrics) {
    res.status(404).send("No metrics found");
    return;
  }

  res.status(200).send(metrics);
};
