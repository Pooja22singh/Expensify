import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { startRemoveExpense, startEditExpense } from '../actions/expenses';
const EditExpensePage = (props) => {
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Expense</h1>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm
                    expense={props.expense}
                    onSubmit={(expense) => {
                        props.dispatch(startEditExpense(props.expense.id, expense));
                        props.history.push("/");
                    }} />
                <button className="removeBtn" onClick={() => {
                    props.dispatch(startRemoveExpense(props.expense));
                    props.history.push("/");
                }}>Remove Expense</button>
            </div>
        </div>
    );
}

// We need connection with store to find out all the details of the expense item from the list.
// therefor using connect 

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
}
const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (expense) => dispatch(startEditExpense(expense.id, expense)),
    startRemoveExpense: (expense) => dispatch(startRemoveExpense(expense))
});

export default connect(mapStateToProps)(EditExpensePage);