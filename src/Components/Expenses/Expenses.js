import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import React,{useState} from "react";

const Expenses=(props)=>{
    const [filterYear,setFilterYear]=useState("");
    const filterYearHandler=(value)=>{
        setFilterYear(value);
        
    }
    const filteredExpenses=props.expenses.filter(expense=>{
        return expense.date.getFullYear().toString()===filterYear;
    })
   
    return(
        <div>
            <Card className="expenses">
            <ExpensesFilter selected={filterYear} filterYear={filterYearHandler}/>
            <ExpensesChart expense={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}
export default Expenses;