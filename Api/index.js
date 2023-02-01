const express = require("express");
const Cars = require("./Src/Routes/Cars.js");


const app = express();
const port = 3001;
app.use(express.urlencoded({extended: true}));
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(express.json());

app.use("/", Cars);


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

module.exports = app;