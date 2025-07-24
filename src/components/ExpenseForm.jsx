import React, { useState } from 'react'
import Input from './Input';
import Select from './Select';

export default function ExpenseForm({ setExpenses,expense,setExpense,editingRowId,setEditingRowId}) {
  const [errors, setErrors] = useState({});

  const validationConfig = {
    title: [{ required: true, message: "please enter title" },
       { minlength: 3, message: "title should be atleast 5 characters long" }],
    category:[{ required: true, message: "please select  category" }],
    amount:[{ required: true, message: "please enter amount" },
      {pattern:/^[1-9]\d*$/,message:'Please enter valid number '}
    ]
  }

  const validate = (formData) => {
    const errorsData = {};
    // console.log(formData);
    
    // console.log(Object.entries(formData));
    
    Object.entries(formData).forEach(([key,value])=>{
       validationConfig[key].some((rule)=>{
        // console.log(rule.required);
        
        if(rule.required && !value){
          errorsData[key]=rule.message;
          return true;
        }
        if(rule.minlength && value.length<rule.minlength){
          errorsData[key]=rule.message;
          return true;
        }
        if(rule.pattern && !rule.pattern.test(value)){
          errorsData[key]=rule.message;
          return true;
        }
       })
    })
   
    setErrors(errorsData);
    return errorsData;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const validateResult = validate(expense);
    if (Object.keys(validateResult).length) {
      return;
    }
    if(editingRowId){
      setExpenses((previousState)=>{
        // console.log(prevState);
        
        return previousState.map((previousExpense)=>{
          console.log(previousExpense.id,editingRowId);
          
          if(editingRowId===previousExpense.id){
             return{...expense,id:previousExpense.id};
          }
          return previousExpense;
        })
      })
      setEditingRowId('');
       setExpense({ title: "", category: "", amount: "" });
      return;
    }
    // const expense={title,category,amount,id:crypto.randomUUID};
    setExpenses((prevState) => [...prevState, { ...expense, id: crypto.randomUUID() }])
    setExpense({ title: "", category: "", amount: "" });
  }
  const handleChange = (e) => {
    // console.log(e.target);
    setErrors((prevState) => {
      return { ...prevState, [e.target.name]: "" }
    })
    setExpense((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value }
    })
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input id='title' name="title" value={expense.title} label="Title" onChange={handleChange} error={errors.title} />


      <Select id="category" name="category" value={expense.category} label="Category" onChange={handleChange} error={errors.category} defaultOption="Select Category" options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]} />


      <Input id='amount' name="amount" value={expense.amount} label="Amount" onChange={handleChange} error={errors.amount} />
      <button className="add-btn">{editingRowId?"Save":"Add"}</button>
    </form>
  )
}
