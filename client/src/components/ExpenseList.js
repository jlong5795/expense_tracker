import { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";

// component imports
import ExpenseModal from "./ExpenseModal";

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

  const removeExpense = (id) => {
    let newExpenses = expenses.filter((expense) => expense.id !== id);
    return setExpenses(newExpenses);
  };

  const createExpense = () => {
    // create new expense in array
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
  
    if (dd < 10) {
      dd = `0${dd}`;
    }
  
    if (mm < 10) {
      mm = `0${mm}`;
    }
  
    today = `${yyyy}/${mm}/${dd}`;

    const newExpense = {
      title: "",
      amount: 0,
      created_at: today,
      tags: [],
    }

    return setExpenses([...expenses, newExpense])
    // open empty modal
    // save or cancel
  }

  return (
    <div>
      {expenses.map((expense) => {
        return (
          <ExpenseModal
            expense={expense}
            key={`expense=${expense.id}`}
            removeExpense={removeExpense}
          />
        );
      })}
      <Button onClick={createExpense}>Add Expense</Button>
    </div>
  );
};

export default ExpenseList;
