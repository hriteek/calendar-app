const express = require("express");
const router = express.Router();

// All route of shows
const showRoutes = require("./api/show");
router.use("/show", showRoutes);

module.exports = router;
