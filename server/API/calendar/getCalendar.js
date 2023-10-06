const { google } = require("googleapis");

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
  const calendar = google.calendar({
    version: "v3",
    auth: authenticate(),
  });

  const formatedCalendar = await calendar.events.list({
    calendarId: "primary",
    timeMin: new Date().toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: "startTime",
  });

  const events = formatedCalendar.data.items;
  if (!events || events.length === 0) {
    console.log("No upcoming events found.");
    return;
  }

  res.status(200).send(events);
};
