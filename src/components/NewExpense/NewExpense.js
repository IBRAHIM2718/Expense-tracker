import React,{useState }from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  
  const saveExpenseDataHandler=(enterExpenseData)=>{
    const expenseData={
      ...enterExpenseData,
      id:Math.random().toString(),


    }

    setIsEditing(false);
    
    props.onNewExpense(expenseData);

  }

  const[isEditing, setIsEditing]=useState(false)

  const startEditing=()=>{
    setIsEditing(true);

  }

  const stopEditing=()=>{
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData= { saveExpenseDataHandler} onCancel={stopEditing} />}
    </div>
  );
};

export default NewExpense;
