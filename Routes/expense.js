const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expense");
router.post("/create", expenseController.addExpense);
router.get("/get-expenses", expenseController.getAllExpense);
router.delete("/delete-expense/:id", expenseController.deleteExpense);
router.put("/edit-expense/:id", expenseController.editExpense);
module.exports = router;
