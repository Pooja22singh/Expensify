import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import totalExpenesSelector from '../selectors/expenses-total-selector';
const ExpensesSummary  = ( {expenseCount, expenseAmount}) => {
const expenselabel = expenseCount > 1 ? 'Expenses' : 'Expense';
console.log(expenseAmount);
 return (
     <div>
     <h1>Viewing {expenseCount} {expenselabel} totalling to {expenseAmount}</h1>     
     </div>
 );
}

const mapStateToProp = (state,props)=>{
const visibleExpenses = selectExpenses(state.expenses,state.filters);
console.log(visibleExpenses.length);
console.log(visibleExpenses);
return{
    expenseCount:visibleExpenses.length,
    expenseAmount:totalExpenesSelector(state.expenses)
 }
}
export default connect(mapStateToProp)(ExpensesSummary);