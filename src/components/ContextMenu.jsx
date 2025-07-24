import React from 'react'

export default function ContextMenu({menuPosition,setMenuPosition,expenses,setExpenses,rowId,expense,setExpense,setEditingRowId}) {

if(!menuPosition.left){
    return;
}
    
  return (
    <div className="context-menu" style={menuPosition} >
            <div onClick={()=>{
                // console.log(expenses.find((data)=>data.id==rowId ));
                
                const editData=expenses.find((data)=>data.id==rowId ) 
                // console.log(editData);
                
                setExpense({ title: editData.title, category: editData.category, amount: editData.amount })
                // setExpenses((prevState)=> prevState.filter((data)=>data.id!==rowId ) )
                setEditingRowId(editData.id);
                // setExpenses((prevState)=>{
                //     return prevState.filter((data)=>data.id!==rowId ) 
                // } )
                setMenuPosition({});
                
            }}>Edit</div>
            <div onClick={()=>{
                setExpenses((prevState)=> prevState.filter((data)=>data.id!==rowId ) )
                setMenuPosition({});
            }}>Delete</div>
     </div>
  )
}
