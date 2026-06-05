const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const apiRoutes = require("./crudapi.js");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/crudapi", apiRoutes);

app.get(/^\/create(?:\.html)?$/, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "create.html"));
});

app.get(/^\/read(?:\.html)?$/, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "read.html"));
});

app.get(/^\/update(?:\.html)?$/, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "update.html"));
});

app.get(/^\/delete(?:\.html)?$/, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "delete.html"));
});

app.get(/^\/spa(?:\.html)?$/, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "spa.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
