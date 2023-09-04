const mysql = require("mysql");

module.exports = function getReviews(req, res) {
  const dbmysql = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    port: process.env.MYSQL_PORT,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  dbmysql.connect((err) => {
    if (err) {
      res.send({ info: "Nie udało się połączyć z bazą danych.", err });
    }
    console.log("Połączono z bazą danych dbmysql");

    let sqlReviews = "SELECT * FROM reviews_table";
    dbmysql.query(sqlReviews, (err, results) => {
      if (err) throw error;
      let reviews = results;
      let reversedReviews = reviews.reverse();

      for (let i = 0; i < reversedReviews.length; i++) {
        reversedReviews[i].id = i;
      }
      res.send({ info: "Wszystkie opinie", reversedReviews });
    });
  });
};
