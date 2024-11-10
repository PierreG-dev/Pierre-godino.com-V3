const collections = require("../../collections");
const fetch = require("node-fetch");

module.exports = async (req, res) => {
  let ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  let now = new Date();

  let exists = await collections.Visit.findOne({
    ip: ip,
    date: now.toLocaleDateString("fr"),
  });

  if (exists) {
    res.status(409).send("Welcome Back !");
    return;
  }

  let location;
  await fetch(`http://ip-api.com/json/${ip}`)
    .then((response) => response.json())
    .then((data) => (location = data))
    .catch((error) =>
      console.error("ERROR while searching ip's location\n" + error)
    );

  // --- Vérification qu'il ne s'agit pas d'un robot américain
  if (location.countryCode == "US") return res.status(200).send("ok");

  collections.Visit.create({
    ip: ip,
    location: {
      country: location.country || "N/A",
      region: location.regionName || "N/A",
      city: location.city || "N/A",
      zip: location.zip || "N/A",
      latitude: location.lat || "N/A",
      longitude: location.lon || "N/A",
    },
    timeSpent: 0,
    journey: [],
    device: req.body.device || "N/A",
    date: now.toLocaleDateString("fr"),
    time: `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
  })
    .then(() => {
      res.status(200).send("well received !");
    })
    .catch((error) => {
      console.error("Error when creating the new visit", error);
      res.status(500).send("Error when creating the visit");
    });
};
