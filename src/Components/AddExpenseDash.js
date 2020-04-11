import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpenses } from '../actions/expenses';
export class AddExpensePage extends React.Component {

    onSubmit = (expenses) =>{
        this.props.startAddExpenses(expenses);
        this.props.history.push("/dashboard");
    }
    render() {
        return (
            <div>
                <p>This is from Add expense Page</p>
                <ExpenseForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    startAddExpenses: (expense) => dispatch(startAddExpenses(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);