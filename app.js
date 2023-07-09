const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

const transactionsController = require("./controllers/transactionsController");

app.use("/transactions", transactionsController);

app.get("/", (req, res) => {
  res.send("Welcome, to the Budgeting App!");
});
app.use("*", (req, res) => {
  res.status(404).send("Sorry, page not found...");
});

module.exports = app;
