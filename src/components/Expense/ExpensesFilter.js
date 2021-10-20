import React from "react";
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    const selectChangeHandler = (event) => {
        props.onChangeFiler(event.target.value);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <lable>Filter by year</lable>
                <select value={props.selected} onChange={selectChangeHandler}>
                    <option value='2024'>2024</option>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                </select>
            </div>
        </div>
    )
}

export default ExpensesFilter;