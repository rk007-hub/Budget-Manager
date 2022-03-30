import React from "react";
import "./AddExpenseButton.css";

const AddExpenseButton=(props)=>{
    const flagChangeHandler=()=>{
        props.flag(0);
    }
    return(
            <div className="new-expense">
            <button onClick={flagChangeHandler} type='submit'>Add Expense</button>
            </div>

        )
        

}

export default AddExpenseButton;