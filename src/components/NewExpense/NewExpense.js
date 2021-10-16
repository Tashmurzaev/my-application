import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

// it's not a wrapper component

const NewExpense = () => {
    return <div className='new-expense'>
        <ExpenseForm/>
    </div>
}

export default NewExpense;