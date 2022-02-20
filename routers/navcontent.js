const navContent = require("express"); // importing express module
const catCon = require("../controllers/category");  // importing the gata function from controller
const navCon = navContent.Router(); // creating a route from  express

navCon.route("/:category").get(catCon.getDataFun);

module.exports = navCon;
