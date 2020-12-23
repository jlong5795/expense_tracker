import { useState, useEffect } from "react";

const Expense = ({ expense }) => {
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

  const formData = {
    title: "",
    amount: "",
    created_at: today,
    tags: [],
  };

  const [form, setForm] = useState(formData);

  useEffect(() => {
    if (expense) {
      setForm(expense);
    }
  }, [expense]);

  const handleChanges = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTagChanges = e => {
      // TODO add functionality
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
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
            type="text"
            value={form.amount}
            onChange={handleChanges}
          />
        </label>
        <p>Date Created: {form.created_at}</p>
        <label htmlFor="tags">
          Tags:
          <input name="tags" type="textarea" />
        </label>
        <button type="submit">Submit</button>
        <button>Cancel</button>
      </form>
      {/*TODO: Create map to display tags and a method to remove them */}
    </div>
  );
};

export default Expense;
