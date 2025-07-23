import React, { useState } from 'react'

export default function ExpenseForm({setExpenses,expenses}) {
  const [expense,setExpense]=useState({title:"",category:"",amount:""});
  const[category,setCategory]=useState("");
  const[amount,setAmount]=useState("")
  const handleSubmit=(e)=>{
      e.preventDefault();
      // const expense={title,category,amount,id:crypto.randomUUID};
      setExpenses((prevState)=>[...prevState,{...expense,id:crypto.randomUUID}])
      setExpense({title:"",category:"",amount:""});
  }
 
  return (
     <form className="expense-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="title">Title</label>
            <input name='title' id="title" value={expense.title} onChange={(e)=>{
              setExpense((prevState)=>{
                return {...prevState,'title':e.target.value}
              })
            }}/>
          </div>
          <div className="input-container">
            <label htmlFor="category">Category</label>
            <select id='category' name='category' value={expense.category} onChange={(e)=>{
               setExpense((prevState)=>{
                return {...prevState,'category':e.target.value}
              })
            }}>
                  <option value="" hidden>Select Category</option>
                  <option value="Grocery">Grocery</option>
                  <option value="Clothes">Clothes</option>
                  <option value="Bills">Bills</option>
                  <option value="Education">Education</option>
                  <option value="Medicine">Medicine</option>
                </select>
          </div>
          <div className="input-container">
            <label htmlFor="amount">Amount</label>
            <input name='amount' id="amount" value={expense.amount} onChange={(e)=>{
               setExpense((prevState)=>{
                return {...prevState,'amount':e.target.value}
              })
            }} />
          </div>
          <button className="add-btn">Add</button>
        </form>
  )
}
