import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

// it's not a wrapper component
const NewExpense = (props) => {
    // lifting up method
    const saveExpenseHandler = data => {
        let expenseData = {
            ...data,
            id: Math.random().toString(),
        }

        props.onAddExpense(expenseData);

    }


    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseDate={saveExpenseHandler}/>
    </div>
}

export default NewExpense;