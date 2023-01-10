const collections = require("../../collections");

module.exports = async (req, res) => {
  let ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  let now = new Date();
  let visit = await collections.Visit.findOne({
    ip: ip,
    date: now.toLocaleDateString("fr"),
  });

  if (!visit) {
    res.status(500).send("Metrics Time error");
    return;
  }

  collections.Visit.findOneAndUpdate(
    {
      ip: ip,
      date: now.toLocaleDateString("fr"),
    },
    {
      timeSpent: parseInt(visit.timeSpent) + 30,
    }
  )
    .then(() => {
      res.status(200).send("well received !");
    })
    .catch((error) => {
      console.error("Error when updating time", error);
      res.status(500).send("Error when updating time");
    });
};
