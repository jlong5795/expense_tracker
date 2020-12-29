const Expense = ({ expense }) => {
  return (
    <div key={expense.id}>
      <p>{expense.title}</p>
      <p>${expense.amount}</p>
      {expense.tags.map((tag, index) => {
        return <p key={`${tag}-${index}`}>{tag}</p>;
      })}
    </div>
  );
};

export default Expense;