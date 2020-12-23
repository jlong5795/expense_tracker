import { useState, useEffect } from "react";

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
          <div key={expense.id}>
            <p>{expense.title}</p>
            <p>${expense.amount}</p>
            {expense.tags.map((tag, index) => {
              return <p key={`${tag}-${index}`}>{tag}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ExpenseList;
