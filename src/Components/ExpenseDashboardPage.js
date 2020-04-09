import React from 'react';
import ExpenseList from './ExpenseList';
import ExpensesListFilter from './ExpensesListFilter';
import ExpensesSummary from './ExpensesSummary';
const ExpenseDashboardPage = () => (
    <div>
    <ExpensesSummary/>
    <ExpensesListFilter/>
    <ExpenseList/>
    </div>
);
export default ExpenseDashboardPage;