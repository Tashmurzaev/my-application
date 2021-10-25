import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

// it's not a wrapper component
const NewExpense = props => {
    // lifting up method
    const saveExpenseHandler = data => {
        let expenseData = {
            ...data,
            id: Math.random().toString(),
        }

        props.onAddExpense(expenseData);
    }

    const ShowHide = () => {
        const [showHide, setShowHide] = useState(false)
        return (
            <div>
                {showHide && <ExpenseForm onSaveExpenseDate={saveExpenseHandler}/>}
                <button onClick={() => setShowHide(true)}>Show</button>
                <button onClick={() => setShowHide(false)}>Hide</button>
            </div>
        )
    }

    return <div className='new-expense'>
        <ShowHide/>
    </div>
}

export default NewExpense;