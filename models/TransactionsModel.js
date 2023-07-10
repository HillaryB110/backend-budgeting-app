const { v4: uuidv4 } = require("uuid");

const TransactionsModel = [
  {
    id: uuidv4(),
    itemName: "Savings",
    amount: 1000,
    date: new Date(),
    from: "Bank",
    category: "Savings",
  },
  {
    id: uuidv4(),
    itemName: "Income",
    amount: 5000,
    date: new Date(),
    from: "Employer",
    category: "Income",
  },
  {
    id: uuidv4(),
    itemName: "UberEats - Umi Sushi",
    amount: 37.55,
    date: new Date(),
    from: "Umi Sushi",
    category: "Food",
  },
];

module.exports = TransactionsModel;
