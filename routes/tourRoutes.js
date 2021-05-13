const express = require("express");
const tourController = require("../controllers/tourController");
const authController = require("../controllers/authController");
const reviewRouter = require("./reviewRoutes");

const router = express.Router();

router.use("/:tourId/reviews", reviewRouter);

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
  .get(authController.protect, tourController.getAllTours)
  .post(tourController.createTour);

// Tours ID
router
  .route("/:id")
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(
    authController.protect,
    authController.restrictTo("admin", "lead-guide"),
    tourController.deleteTour
  );

module.exports = router;
