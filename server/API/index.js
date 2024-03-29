const fetchCalendar = require("./calendar/fetchCalendar");

const getMetrics = require("./get/getMetrics");
const getRequests = require("./get/getRequests");

const postVisit = require("./post/postVisit");
const postRequest = require("./post/postRequest");

const putVisitJourney = require("./put/putVisitJourney");
const putVisitTime = require("./put/putVisitTime");

module.exports = {
  fetchCalendar,
  getMetrics,
  getRequests,
  postVisit,
  postRequest,
  putVisitJourney,
  putVisitTime,
};
