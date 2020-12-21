const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/EXAMPLENAME"
);

const bookSeed = [
  {
    name: "EXAMPLE 1",
    date: new Date(Date.now())
  },
  {
    name: "EXAMPLE 2",
    date: new Date(Date.now())
  },
  {
    name: "EXAMPLE 3",
    date: new Date(Date.now())
  },
  {
    name: "EXAMPLE 4",
    date: new Date(Date.now())
  },
  {
    name: "EXAMPLE 5",
    date: new Date(Date.now())
  },
  
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
