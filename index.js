const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");
const port = process.env.PORT || 3001;

const sendEmail = require("./sendEmail/sendEmail");
const getReviews = require("./mySQLRequests/getReviews");

const app = express();

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build", "index.html"),
    function (err) {
      if (err) {
        res.status(500), send(err);
      }
    }
  );
});

app.use(express.static(path.join(__dirname, "./client/build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/getReviews", (req, res) => {
  getReviews(req, res);
});

app.post("/sendEmail", (req, res) => {
  sendEmail(req, res);
});

app.listen(port, () => console.log(`Server listen at port: ${port}`));
