// dependencies
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

// components
import Expense from "./Expense";

// styles
import './ExpenseModal.css'

const ExpenseModal = ({ expense, removeExpense }) => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();

  // gets current date and formats it
  if (dd < 10) {
    dd = `0${dd}`;
  }

  if (mm < 10) {
    mm = `0${mm}`;
  }

  today = `${yyyy}/${mm}/${dd}`;
  // end date format

  const formData = {
    title: "",
    amount: 0,
    created_at: today,
    tags: [],
  };

  const [form, setForm] = useState(formData);
  const [tags, setTags] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (expense) {
      setForm(expense);
      setDisabled(false);
    }
  }, [expense]);

  const handleChanges = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (form.title.length > 2) {
      setDisabled(false);
    }
  };

  const handleTagChanges = (e) => {
    setTags(e.target.value);
  };

  const onTagSubmit = (e) => {
    e.preventDefault();
    if (tags.length > 0) {
      const stringArray = tags.split(" ");
      setForm({ ...form, tags: [...form.tags, ...stringArray] });
      setTags("");
      console.log(form);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm(formData);
    setDisabled(true);
    setOpen(false);
  };

  const toggle = () => {
    return setOpen(!open);
  };

  const removeTags = (index) => {
    const newTags = expense.tags.splice(index, 1);

    return setTags(newTags);
  };

  return (
    <div>
      <Modal show={open} className='modal-container'>
        <Modal.Header>
          <Modal.Title>Modify Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label htmlFor="title">
              Title:
              <input
                name="title"
                type="text"
                value={form.title}
                onChange={handleChanges}
              />
            </label>
            <label htmlFor="amount">
              Amount:
              <input
                name="amount"
                type="number"
                value={form.amount}
                onChange={handleChanges}
                step="0.01"
              />
            </label>
            <p>Date Created: {form.created_at}</p>
            <label htmlFor="tags">
              Tags:
              <input
                name="tags"
                type="text"
                value={tags}
                onChange={handleTagChanges}
              />
            </label>
            <Button onClick={onTagSubmit} className='button tag-submit'>Add Tags</Button>
            <div className='form-buttons-container'>
            <Button onClick={onSubmit} disabled={disabled} className='button form-submit'>
              Submit
            </Button>
            <Button className='button form-cancel'>Cancel</Button>
            </div>
          </form>
          <div>
            {expense.tags.map((tag, index) => {
              return (
                <p key={tag}>
                  {tag}
                  <span onClick={() => removeTags(index)}> x</span>
                </p>
              );
            })}
          </div>
        </Modal.Body>
      </Modal>
      <Expense
        expense={expense}
        toggle={toggle}
        removeExpense={removeExpense}
      />
    </div>
  );
};

export default ExpenseModal;
