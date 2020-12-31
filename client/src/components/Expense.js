import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Expense = ({ expense, toggle, removeExpense }) => {
  const deleteExpense = (id) => {
    return removeExpense(id);
  };

  let tagString = "";

  expense.tags.forEach((tag, index) => {
    if (index < expense.tags.length - 1) {
      return (tagString += `${tag}, `);
    } else {
      return (tagString += tag);
    }
  });

  return (
    <Card key={expense.id}>
      <Card.Header>{expense.title}</Card.Header>
      <Card.Body>
        <Card.Text>
          <p>Amount: ${expense.amount}</p>
          <p>Tags: {tagString}</p>
        </Card.Text>
        <Button onClick={() => toggle()}>Edit</Button>
        <Button onClick={() => deleteExpense(expense.id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default Expense;
