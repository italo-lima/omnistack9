const express = require("express");

const routes = express.Router();

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const DashboardController = require("./controllers/DashboardController");
const BookingController = require("./controllers/BookingController");
const ApprovalController = require("./controllers/ApprovalController");
const RejectionController = require("./controllers/RejectionController");

const uploadMulter = require("./config/upload");

routes.post("/sessions", SessionController.store);

routes.post("/spots", uploadMulter.single("thumbnail"), SpotController.store);
routes.get("/spots", SpotController.index);

routes.post("/spots/:spot_id/bookings", BookingController.store);

routes.get("/dashboard", DashboardController.show);

routes.post("/bookings/:booking_id/approvals", ApprovalController.store);
routes.post("/bookings/:booking_id/rejections", RejectionController.store);

module.exports = routes;
