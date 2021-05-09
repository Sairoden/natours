const express = require("express");
const tourController = require("../controllers/tourController");

const router = express.Router();

// router.param("id", tourController.checkID);

// Top 5 cheap tours
router
  .route("/top-5-cheap")
  .get(tourController.aliasTopTours, tourController.getAllTours);

// Tour Stats
router.route("/tour-stats").get(tourController.getTourStats);

// Tour monthly plan
router.route("/monthly-plan/:year").get(tourController.getMonthlyPlan);

// Tours
router
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.createTour);

// Tours ID
router
  .route("/:id")
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
