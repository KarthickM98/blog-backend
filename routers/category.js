const express = require("express"); // creating a mini server
const catCon = require("../controllers/category");
const routerOne = express.Router();
routerOne
  .route("/:id") // using the route  to access multiple methods
  .get(catCon.getDataFun)
  .post((req, res) => {    // post is not used till now
    res.send("this is from post");
  });
module.exports = routerOne;
