import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredtitle, setEnteredTitle] = useState("");

  /*const [userInput, setUserInput]=useState=(
  {
    enteredtitle:'',
    enterdamount:'',
    enterdate:'',

  });
  */
  const titleChangeHandler = (event) => {
    /*setUserInput((prevState)=>{
      return {...prevState,enteredtitle:event.target.value};

    });
    */
    setEnteredTitle(event.target.value);
  };

  const [enterdamount, setamount] = useState("");

  const amountChangeHandler = (event) => {
    setamount(event.target.value);
  };

  const [enterdate, setdate] = useState("");
  const dateChangeHandler = (event) => {
    setdate(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      // new object created
      title: enteredtitle,
      amount:+enterdamount,
      date: new Date(enterdate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle(""); // two way binding
    setdate("");
    setamount("");
  };


 
  

  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            placeholder="Please enter"
            type="text"
            value={enteredtitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            placeholder="Please enter"
            type="number"
            min="0.01"
            step="10"
            value={enterdamount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            placeholder="Please enter"
            type="date"
            min="2020-01-01"
            max="2023-10-27"
            value={enterdate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
         <button type="button" onClick={props.onCancel}>Cancel</button>
         <button type="submit">Add Expense</button>
      </div>
    </form>
  

   );
};
export default ExpenseForm;
