import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense=(props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString(),
        }
        props.saveExpenseData(expenseData);
        props.flag(1);
    }
    const cancelHandler=()=>{
        props.flag(1);
    }
    
    return(
        <div className="new-expense">
        <ExpenseForm flag={cancelHandler} onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;