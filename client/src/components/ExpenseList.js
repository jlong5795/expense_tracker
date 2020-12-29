import { useState, useEffect } from "react";

// component imports
import Expense from './Expense';
import ExpenseModal from './ExpenseModal';

const expenseList = [
  {
    id: 1,
    title: "Rent",
    amount: 900,
    created_at: "2020/12/01",
    tags: ["why", "so", "much", "money"],
  },
  {
    id: 2,
    title: "Gas",
    amount: 10,
    created_at: "2020/12/02",
    tags: ["car", "thirsty"],
  },
];

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Put call to fetch expense list here
    setExpenses(expenseList);
  }, []);

  return (
    <div>
      {expenses.map((expense) => {
        return (
          <Expense expense={expense} />
        );
      })}
    </div>
  );
};

export default ExpenseList;
