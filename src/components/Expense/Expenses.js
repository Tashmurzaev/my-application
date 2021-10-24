import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../../UI/Card';
import ExpenseFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })


    return <Card className="expenses">
            <ExpenseFilter 
            selected={filteredYear}
            onChangeFiler={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList expenses={filteredExpenses}/>
    </Card>
}
    
export default Expenses;