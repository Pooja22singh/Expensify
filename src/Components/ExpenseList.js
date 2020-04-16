import React from 'react';
import { connect } from 'react-redux';
import ExpensesListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
const expensesList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show_on_mobile">Expenses</div>
            <div className="show_on_desktop">Expense</div>
            <div className="show_on_desktop">Amount</div>
        </div>
        <div className="list-body">
        {
            props.expenses.length == 0 ? (<div className="list-item list-item--message"><span>No expenses</span></div>) :
                (props.expenses.map((expense) => {
                    return <ExpensesListItem key={expense.id} {...expense} />
                }))
        }
        </div>
    </div>
);

const mapStatetoProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }

}
export default connect(mapStatetoProps)(expensesList);