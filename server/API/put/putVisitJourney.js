const collections = require("../../collections");

module.exports = async (req, res) => {
  let ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  let now = new Date();
  let visit;
  await collections.Visit.findOne({
    ip: ip,
    date: now.toLocaleDateString("fr"),
  }).then((data) => (visit = data));

  if (!visit) {
    res.status(500).send("Metrics Journey error");
    return;
  }

  await collections.Visit.findOneAndUpdate(
    {
      ip: ip,
      date: now.toLocaleDateString("fr"),
    },
    {
      journey: visit.journey + [req.body.newPage],
    }
  )
    .then(() => {
      res.status(200).send("well received !");
    })
    .catch((error) => {
      console.error("Error when creating the new visit", error);
      res.status(500).send("Error when creating the visit");
    });
};
