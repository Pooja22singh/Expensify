import React from 'react';
import { connect } from 'react-redux';
import ExpensesListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
const expensesList = (props) => (
    <div>
        <h1>Expenses List</h1>
        {props.expenses.map((expense)=>{
         return <ExpensesListItem key = {expense.id} {...expense} />
        })}
    </div>
);

const mapStatetoProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    }

}
export default connect(mapStatetoProps)(expensesList);