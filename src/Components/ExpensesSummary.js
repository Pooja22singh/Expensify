import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import { Link } from 'react-router-dom';
import totalExpenesSelector from '../selectors/expenses-total-selector';
const ExpensesSummary = ({ expenseCount, expenseAmount }) => {
    const expenselabel = expenseCount > 1 ? 'Expenses' : 'Expense';
    console.log(expenseAmount);
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span> {expenseCount} </span>  {expenselabel} totalling to <span>{expenseAmount}</span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
}

const mapStateToProp = (state, props) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    console.log(visibleExpenses.length);
    console.log(visibleExpenses);
    return {
        expenseCount: visibleExpenses.length,
        expenseAmount: totalExpenesSelector(state.expenses)
    }
}
export default connect(mapStateToProp)(ExpensesSummary);