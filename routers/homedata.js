const exhomedata = require("express");
const hdCon = require("../controllers/category");
const hmd = exhomedata.Router(); // we have to use .Router() because the get function is inside controllers ,// Router will help to the function from the controller
hmd.get("/homed", hdCon.getDataFun);
module.exports = hmd;
