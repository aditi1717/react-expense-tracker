
import { useState } from 'react'
import './App.css'
import ExpenseData from './components/ExpenseData'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'

function App() {

const[expenses,setExpenses]=useState(ExpenseData);
  return (
    <>
      <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
       <ExpenseForm expenses={expenses} setExpenses={setExpenses}/>
       <ExpenseTable expenses={expenses} setExpenses={setExpenses}/>
        <div className="context-menu">
            <div>Edit</div>
            <div>Delete</div>
        </div>
      </div>
    </main>
    </>
  )
}

export default App
