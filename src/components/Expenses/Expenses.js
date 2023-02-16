import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import './Expenses.css'
function Expenses(props) {
const [filteredYear, setFilteredYear] = useState('2022');
  const filterChangeHandler = selectedYear => {
   
   setFilteredYear(selectedYear)
  }
  return (
    <div>
     
    <Card className="expenses">
    <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
    {props.items.map((expenses)=>
     <ExpenseItem
      key={expenses.id}
      title={expenses.title}
      amount={expenses.amount}
      date={expenses.date}
    
     />
    )}
    </Card>
    </div>
  );
}

export default Expenses;
