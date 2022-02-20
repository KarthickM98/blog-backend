// here we are going to index all our routes and importing this index in server to make good coding practice
const exIndex = require("express");  // creating server
const routerOne = require("./category"); //route1
const navCon = require("./navcontent");//route2
const hdCon = require("./homedata");//route3
const inRoute = exIndex.Router(); // creating server router

inRoute.use("/dataOne", routerOne); //using route1
inRoute.use("/dataTwo", navCon); //using route2
inRoute.use("/data3", hdCon);  //using route3

module.exports = inRoute;
