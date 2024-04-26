const express = require("express");
const { addSqlElement } = require("../controllers/sqlController");

const router = express.Router();
// const { addElement, deleteElement } = require("../controllers/allFunctions");

router.route("/add").post(addSqlElement);
// router.route("/delete").post(deleteElement);

module.exports = router;
