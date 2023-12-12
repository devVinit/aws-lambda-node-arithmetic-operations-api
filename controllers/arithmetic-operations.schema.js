const yup = require("yup");

const arithmeticSchema = yup.object().shape({
  body: yup.object({
    numberA: yup.number().required(),
    numberB: yup.number().required(),
  }),
});

module.exports = {
  arithmeticSchema,
};
