import React from "react";
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'
export default function ExpensesList(props) {

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No record</h2>
  }
    
  return <ul className="expenses-list">
{
    props.items.map((expenses) => {
        return(
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />)
      })
}
  </ul>
}