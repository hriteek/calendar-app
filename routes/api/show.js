const express = require("express");
const router = express.Router();

const showController = require("../../modules/show/showController");

router.get("/", showController.getShow);

module.exports = router;
