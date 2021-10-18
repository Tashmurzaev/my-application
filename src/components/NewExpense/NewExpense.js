import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

// it's not a wrapper component
const NewExpense = () => {
    // lifting up method
    const saveExpenseHandler = data => {

    }


    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseDate={saveExpenseHandler}/>
    </div>
}

export default NewExpense;