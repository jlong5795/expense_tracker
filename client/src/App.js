import './App.css';

// component imports
import ExpenseList from './components/ExpenseList'

function App() {
  return (
    <div className="App">
      <h1>Welcome to My Expense Tracker</h1>
      <ExpenseList />
    </div>
  );
}

export default App;
