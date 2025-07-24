
import { useState } from 'react'
import './App.css'
import ExpenseData from './components/ExpenseData'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {

const[expenses,setExpenses]=useLocalStorage('expenses',ExpenseData);
 const [expense, setExpense] = useLocalStorage('expense',{ title: "", category: "", amount: "" });
 const [editingRowId,setEditingRowId]=useLocalStorage('editingRowId',"");
 
 
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
