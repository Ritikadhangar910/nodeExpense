const Expense = require("../models/Expense");

exports.addExpense = async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const num = req.body.expen;
    if (!num || !email || !num) {
      res.status(400).json({ Error: "please fill the complete details" });
      return;
    }
    const data = await Expense.create({
      name: name,
      email: email,
      expense: num,
    });
    res.status(201).json({ data: data });
  } catch (err) {
    res.status(500).json({ Error: err.errors[0].message });
  }
};

exports.getAllExpense = async (req, res) => {
  try {
    const expense = await Expense.findAll();
    res.status(200).json({ data: expense });
  } catch (err) {
    res.status(500).json({ Error: err });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      res.status(400).json({ Error: "please send expense id" });
      return;
    }
    console.log(id, "id");
    let resp = await Expense.destroy({ where: { id: id } });
    res.status(200).json({ data: resp });
  } catch (err) {
    res.status(500).json({ Error: err });
  }
};

exports.editExpense = async (req, res) => {
  try {
    const id = req.params.id;
    const Expensedata = req.body;
    const expense = await Expense.findByPk(id);
    console.log(id);
    if (!expense) {
      return res.status(404).json({ message: "User not found" });
    }
    const resp = await expense.update(Expensedata);
    res.status(200).json({ message: resp });
  } catch (err) {
    res.status(500).json({ Error: err });
  }
};
