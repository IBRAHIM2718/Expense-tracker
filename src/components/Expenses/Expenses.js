import React, { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {

  const [filteredyear, setfilter] = useState("2022");
  const filterChangeHandler = (selectedyear) => {
    setfilter(selectedyear);
  };

  const Filteredexpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredyear;
  });

  

  return (
    <div>
      <Card className="expenses">
       
        <ExpensesFilter
          selected={filteredyear}
          onChangeFilter={filterChangeHandler}
        />
         <ExpenseChart expenses={Filteredexpense}/>
        <ExpensesList items={Filteredexpense}/>
      </Card>
    </div>
  );
}

export default Expenses;
