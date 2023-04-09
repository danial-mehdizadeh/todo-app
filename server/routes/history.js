const express = require("express");

const router = express.Router();

const { getHistory } = require("../controllers/history");

router.route("/").get(getHistory);

module.exports = router;
