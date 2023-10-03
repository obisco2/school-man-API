const express = require("express");
const server = express();
server.use(express.json());
const adminRoute = require("./route/admin")
const studentRoute = require("./route/student");

server.use("/admin", adminRoute);
server.use('/student', studentRoute);

server.get('/', (req, res) => {
  res.send('Welcome to my API built for school');
});


server.listen(4000, () => {
  console.log("Server running on port 4000");
});
