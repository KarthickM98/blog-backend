// we are creating the backend of reactblog!!
const express = require("express");
const cors = require("cors"); // cors for security-purpose it allows to connect this app with other apps!!

const app = express(); // server created
app.use(cors());        // using cors

const userRouter = require("./routers/index"); // miniexpress server imported here
app.use("/api/v1", userRouter); // miniexpress server used here

app.listen(8000, () => {
  // here we create the sever to run in the port 8000
  console.log("Application has started successfully!!!. Hurrah!!"); 
});


