import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';

const store = configureStore();
//Add Expenses

const expenseOne = store.dispatch(addExpense(
    { description : "Water Bill",
      note : "water bill payment",
      amount : 1000, 
      createDate : 12345
    }));

const expenseTwo=store.dispatch(addExpense(
    { description : "Electricity Bill",
      note : "electricity bill payment",
      amount : 500, 
      createDate : 12346
    }));

const expenseThree=store.dispatch(addExpense(
    { description : "Maintenance charges",
      note : "Miscelleneous payment",
      amount : 800, 
      createDate : 12347
    }));

//Setting Text Filter

//store.dispatch(setFilterText("bill"));
// setTimeout(()=>{
//   store.dispatch(setFilterText("rent"));
// },3000);

const jsx=(
  <Provider store = {store}>
  <AppRouter/>
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));