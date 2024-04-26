const db = require("../config/dbSql");
const addSqlElement = async (req, res) => {
  const { name, author, copies } = req.body;

  if (!name || !author || !copies) {
    return res.status(400).json({ msg: "Please enter all details" });
  }

  const sql = `INSERT INTO books (name,author,copies) VALUES ('${name}','${author}','${copies}')`;

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(400).json("Error: " + err);
    }
    res.json("Book added!");
  });
};

module.exports = { addSqlElement };
