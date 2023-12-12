const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();

const controllers = require("./controllers");

const PORT = 4000;

app.set("trust proxy", 1);
app.use(express.urlencoded({ extended: true }));
app.use(cors({}));
app.use(express.json({ extended: true }));
app.use(helmet());

app.use("/", controllers);

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
