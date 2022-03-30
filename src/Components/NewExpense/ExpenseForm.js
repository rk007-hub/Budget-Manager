import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm=(props)=>{
    const [enteredTitle,setTitle]=useState('');
    const [enteredAmount,setAmount]=useState('');
    const [enteredDate,setDate]=useState('');

    const titleChangedHandler=(event)=>{
        setTitle(event.target.value);
        // console.log(enteredTitle);
    }

    const amountChangedHandler=(event)=>{
        setAmount(event.target.value);
        // console.log(enteredAmount);
    }

    const dateChangedHandler=(event)=>{
        setDate(event.target.value);
        // console.log(enteredDate);
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        // const expenseData={
        //     title:enteredTitle,
        //     amount:enteredAmount,
        //     date:new Date(enteredDate),
        // }
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
          };
        props.onSaveExpenseData(expenseData);
        setAmount('');
        setDate('');
        setTitle('');
    }
    const cancelHandler=()=>{
        props.flag();
    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangedHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01"  value={enteredAmount} onChange={amountChangedHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31"  value={enteredDate} onChange={dateChangedHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
            <button onClick={cancelHandler} type='button'>Cancel</button>
            <button  type='submit'>Add Expense</button>
            </div>
            
        </form>
    )

}

export default ExpenseForm;