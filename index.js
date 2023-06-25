const express = require("express");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 8070;

let products = [
  { id: 1, name: "ASUS-nf1", price: 5000, category: "lep-tops" },
  { id: 2, name: "Galaxy", price: 3000, category: "phones" },
  { id: 2, name: "Galaxy2", price: 3500, category: "phones" },
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:category", (req, res) => {
  const id = req.params.category;
  if (!id) {
    res.status(400).send("there in no category");
    return;
  }
  const catProducts = products.filter((p) => p.category == category);
  if (!product) {
    res.status(404).send("no data was found");
    return;
  }
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
