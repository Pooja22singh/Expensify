import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';

const store = configureStore();

const jsx=(
  <Provider store = {store}>
  <AppRouter/>
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));