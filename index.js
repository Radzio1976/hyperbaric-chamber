const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3001;

const sendEmail = require("./sendEmail/sendEmail");

const app = express();

app.use(express.static(path.join(__dirname, "./client/build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/sendEmail", (req, res) => {
  sendEmail(req, res);
});

app.listen(port, () => console.log(`Server listen at port: ${port}`));
