const express = require("express");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 8070;

let products = [
  { id: 1, name: "ASUS-nf1", price: 5000, category: "lep-tops" },
  { id: 1, name: "Galaxy", price: 3000, category: "phones" },
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
