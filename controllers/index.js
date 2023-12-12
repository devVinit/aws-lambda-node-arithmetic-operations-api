const express = require("express");
const router = express.Router();

const arithmeticOperationsRoutes = require("./arithmetic-operations.controller");

router.use("/operations", arithmeticOperationsRoutes);

module.exports = router;
