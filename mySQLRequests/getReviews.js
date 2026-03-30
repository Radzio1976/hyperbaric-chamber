const pool = require("./db");

module.exports = function getReviews(req, res) {
  let sqlReviews = "SELECT * FROM reviews_table";

  pool.query(sqlReviews, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send({ error: err });
    }

    let reversedReviews = results.reverse();

    for (let i = 0; i < reversedReviews.length; i++) {
      reversedReviews[i].id = i;
    }

    res.send({ reversedReviews });
  });
};
