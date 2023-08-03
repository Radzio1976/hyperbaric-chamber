const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
require("dotenv/config");
const port = process.env.PORT || 3001;

const sendEmail = require("./sendEmail/sendEmail");
const getReviews = require("./mySQLRequests/getReviews");

const app = express();

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

// Tworzenie tabeli w bazie danych mysql
// function createNewTable() {
//   const dbmysql = mysql.createConnection({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     port: process.env.MYSQL_PORT,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DATABASE,
//   });
//   dbmysql.connect((err) => {
//     if (err) {
//       console.log("Nie udało się połączyć z bazą danych.", err);
//     }
//     console.log("Połączono z bazą danych dbmysql");

//     //Tworzenie nowej tabeli

//     let sql =
//       "CREATE TABLE reviews_table (id INT NOT NULL AUTO_INCREMENT, reviewId VARCHAR(255), name VARCHAR(255), starsQty VARCHAR(255), reviewText VARCHAR(1000), date VARCHAR(255), reviewLink VARCHAR(255), userAvatar VARCHAR(255), PRIMARY KEY (id))";
//     dbmysql.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });
// }
// createNewTable();

// Dodawanie tablicy z opiniami do bazy danych mysql
// const addReviewsToTable = (reviews) => {
//   reviews.forEach((review, i) => {
//     const dbmysql = mysql.createConnection({
//       host: process.env.MYSQL_HOST,
//       user: process.env.MYSQL_USER,
//       port: process.env.MYSQL_PORT,
//       password: process.env.MYSQL_PASSWORD,
//       database: process.env.MYSQL_DATABASE,
//     });

//     dbmysql.connect((err) => {
//       if (err) {
//         throw err;
//       }
//       console.log("Połączono z bazą danych dbmysql");
//     });

//     const reviewData = {
//       reviewId: review.id,
//       name: review.name,
//       starsQty: review.starsQty,
//       reviewText: review.reviewText,
//       date: review.date,
//       reviewLink: review.reviewLink,
//       userAvatar: review.userAvatar,
//     };

//     let sqlReviewData = "INSERT INTO reviews_table SET ?";

//     dbmysql.query(sqlReviewData, reviewData, (err) => {
//       if (err) {
//         throw err;
//       }
//       console.log(`Pomyślnie dodano rekord o nazwie ${review.name}`);
//     });
//   });
// };
// addReviewsToTable(reviews);
