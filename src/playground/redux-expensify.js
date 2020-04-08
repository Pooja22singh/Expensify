import { createStore, combineReducers } from 'redux';
import uuid from "uuid";
const filterdefaultstate = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
}
const expenseReducer = (state = expensedefaultstate, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return state.concat(action.expense);
        case "REMOVE_EXPENSE":
            return state.filter(({ id }) => id !== action.id);
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else
                    return expense;
            });
        default:
            return state;
    }
}
const filterReducer = (state = filterdefaultstate, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            }
        case "SORT_BY_DATE":
            return state;
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount"
            }
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.date
            }
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.date 
            }
        default:
            return state;
    }
}
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
)
//based on the filter display the objects of the expenses
const getVisibleExpenses = ( expenses, {text, sortBy, startDate, endDate}) => {
return expenses.filter((expense)=>{
const startDateMatch=typeof startDate!='number' || expense.createDate>=startDate;
const endDateMatch=typeof endDate!='number' || expense.createDate>=endDate;
const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
return startDateMatch && endDateMatch && textMatch;
}).sort((a,b)=>{
   if(sortBy === 'date')
   return a.createDate < b.createDate ? 1 : -1;
   else
   {
       return a.amount < b.amount ? 1 : -1;
   }
});
}
const unsubscribe = store.subscribe(() => {
     const state=store.getState();
     const visibleExpenses=getVisibleExpenses(state.expenses, state.filters );
     console.log(visibleExpenses);
 });
//ADD EXPENSE
const addExpense = ({ description = "", note = "", amount = 0, createDate = 0 } = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createDate
    }
}
);
const expenseOne = store.dispatch(addExpense({ description: "rent", amount: 1000, createDate: 128}));
const expenseTwo = store.dispatch(addExpense({ description: "chai", amount: 10, createDate : 129 }));
const expenseThree = store.dispatch(addExpense({ description: "mocha", amount: 10, createDate : 139 }));
const expenseFour = store.dispatch(addExpense({ description: "kadak", amount: 10, createDate : 879 }));
const expenseFive= store.dispatch(addExpense({ description: "tgada", amount: 10, createDate : 100 }));
//REMOVE EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});
//EDIT EXPENSE
const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});
const setFilterText = (text) => ({
    type: "SET_TEXT_FILTER",
    text
});
const sortByDate = () => ({
    type: "SORT_BY_DATE",
});
const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
});
const setStartDate = (date) => ({
    type: "SET_START_DATE",
    date
});
const setEndDate = (date) => ({
    type: "SET_END_DATE",
    date
});
//store.dispatch(removeExpense({ id: expenseTwo.expense.id }));
store.dispatch(editExpense(expenseOne.expense.id, { amount: 200 }));
//store.dispatch(setFilterText("rent"));
store.dispatch(sortByDate());
store.dispatch(sortByAmount());
//store.dispatch(setStartDate(126));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(126));




