const { google } = require("googleapis");

// --- Découpe les evenements qui durent plusieurs jours en plusieurs events
const splitMultiDayEvents = (event) => {
  console.log(event);
  const events = [];
  const isFullDay = event.start.date && event.end.date ? true : false;
  const start = isFullDay
    ? new Date(event.start.date)
    : new Date(event.start.dateTime);
  const end = isFullDay
    ? new Date(new Date(event.end.date).getTime() - 24 * 60 * 60 * 1000)
    : new Date(event.end.dateTime);

  let current = new Date(start);

  while (current < end) {
    const nextDay = new Date(current);
    nextDay.setDate(nextDay.getDate() + 1);
    nextDay.setHours(0, 0, 0, 0);

    // --- Journée entière
    if (isFullDay) {
      console.log(current.toLocaleDateString("fr"));
      let start = new Date(current.toISOString());
      start.setHours(0);
      start.setMinutes(0);
      start.setSeconds(0);
      let end = new Date(current.toISOString());
      end.setHours(23);
      end.setMinutes(59);
      end.setSeconds(59);
      events.push({
        title: "hidden event",
        start: start.toISOString(),
        end: end.toISOString(),
        allDay: true,
      });
    }
    // --- Journée avec heure de début & de fin
    else {
      let start = new Date(current.toISOString());
      start.setHours(new Date(event.start.dateTime).getHours());
      start.setMinutes(new Date(event.start.dateTime).getMinutes());
      start.setSeconds(new Date(event.start.dateTime).getSeconds());
      let end = new Date(current.toISOString());
      end.setHours(new Date(event.end.dateTime).getHours());
      end.setMinutes(new Date(event.end.dateTime).getMinutes());
      end.setSeconds(new Date(event.end.dateTime).getSeconds());

      events.push({
        title: "hidden event",
        start: start.toISOString(),
        end: end.toISOString(),
        allDay: false,
      });
    }

    current = nextDay;
  }

  return events;
};

// --- Récupère les ID depuis les variables d'env et créé un item d'authentification
const authenticate = () => {
  const auth = new google.auth.OAuth2(
    process.env.CALENDAR_CLIENT_ID,
    process.env.CALENDAR_CLIENT_SECRET
  );
  auth.setCredentials({
    refresh_token: process.env.CALENDAR_REFRESH_TOKEN,
  });
  return auth;
};

module.exports = async (req, res, next) => {
  const { password } = req.body;
  if (!password)
    return res.status(400).send({
      code: 400,
      msg: "Merci d'entrer un mot de passe",
    });

  if (password !== process.env.CALENDAR_KEY)
    return res.status(400).send({
      code: 400,
      msg: "Mot de passe incorrect",
    });
  const userCalendar = google.calendar({
    version: "v3",
    auth: authenticate(),
  });

  const response = await userCalendar.events.list({
    calendarId: "primary",
    timeMin: new Date().toISOString(),
    singleEvents: true,
    maxResults: 50,
    orderBy: "startTime",
    timeZone: "Europe/Paris",
  });

  const formattedResponse = [];

  response.data.items.forEach((event) => {
    if (
      event.start.date ||
      new Date(event.start.dateTime).getDate() !==
        new Date(event.end.dateTime).getDate()
    ) {
      formattedResponse.push(...splitMultiDayEvents(event));
    } else {
      formattedResponse.push({
        title: "hidden event",
        start: event.start.dateTime,
        end: event.end.dateTime,
        fullDay: !!event.start.date,
      });
    }
  });

  setTimeout(() => {
    res.status(200).send(formattedResponse);
  }, 1500);
};
