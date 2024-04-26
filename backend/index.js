const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const router = require("./routes/routes");
const db = require("./config/dbSql");
// connectDb();

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MySql connected...");
    db.query(
      "CREATE DATABASE IF NOT EXISTS DockerExam",
      function (err, result) {
        if (err) throw err;
        console.log("Database created!");
      }
    );
    db.query("USE DockerExam", function (err, result) {
      if (err) throw err;
      console.log("Using Database DockerExam");
    });
    db.query(
      "CREATE TABLE IF NOT EXISTS DockerExam.books (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), author VARCHAR(255), copies INT)",
      function (err, result) {
        if (err) throw err;
        console.log("Table created!");
      }
    );
  }
});

app.use(cors());
app.use("/", router);

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
