const express = require("express");
const { validate } = require("../middlewares");
const { arithmeticSchema } = require("./arithmetic-operations.schema");
const router = express.Router();

router.post("/add", validate(arithmeticSchema), (req, res) => {
  const { numberA, numberB } = req.body;
  return res.send({
    result: numberA + numberB,
  });
});

router.post("/subtract", validate(arithmeticSchema), (req, res) => {
  const { numberA, numberB } = req.body;
  return res.send({
    result: numberA - numberB,
  });
});

router.post("/multiply", validate(arithmeticSchema), (req, res) => {
  const { numberA, numberB } = req.body;
  return res.send({
    result: numberA * numberB,
  });
});

router.post("/divide", validate(arithmeticSchema), (req, res) => {
  const { numberA, numberB } = req.body;
  return res.send({
    result: numberA / numberB,
  });
});

module.exports = router;
