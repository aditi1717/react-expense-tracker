
import { useState } from 'react'
import './App.css'
import ExpenseData from './components/ExpenseData'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'

function App() {

const[expenses,setExpenses]=useState(ExpenseData);
 const [expense, setExpense] = useState({ title: "", category: "", amount: "" });
 const [editingRowId,setEditingRowId]=useState('');
  return (
    <>
      <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
       <ExpenseForm expense={expense} setExpense={setExpense} setExpenses={setExpenses} editingRowId={editingRowId} setEditingRowId={setEditingRowId} />
       <ExpenseTable setExpense={setExpense} expenses={expenses} setExpenses={setExpenses} setEditingRowId={setEditingRowId}/>
      </div>
    </main>
    </>
  )
}

export default App
