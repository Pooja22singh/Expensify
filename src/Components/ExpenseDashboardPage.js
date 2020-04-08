import React from 'react';
import ExpenseList from './ExpenseList';
import ExpensesListFilter from './ExpensesListFilter';
const ExpenseDashboardPage = () => (
    <div>
    <ExpensesListFilter/>
    <ExpenseList/>
    </div>
);
export default ExpenseDashboardPage;