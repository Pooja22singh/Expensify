import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import {Provider} from 'react-redux';
import {startSetExpenses} from './actions/expenses';
import { login, logout } from './actions/auth';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import configureStore from './store/configureStore';
import {firebase} from './firebase/firebase';
import LoadingPage from './Components/LoadingPage';
const store = configureStore();

const jsx=(
  <Provider store = {store}>
  <AppRouter/>
  </Provider>
);
ReactDOM.render(<LoadingPage />, document.getElementById("app"));
let hasRendered=false;
const renderApp = () =>{
  if(!hasRendered){
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered=true;
  }
}
firebase.auth().onAuthStateChanged((user)=>{
  if(user){
      store.dispatch(login(user));
      store.dispatch(startSetExpenses()).then(()=>{
        renderApp();
        if(history.location.pathname=="/")
         history.push("/dashboard");
    });
  }
  else{
    store.dispatch(logout());
    ReactDOM.render(jsx, document.getElementById("app"));
    renderApp();
    history.push("/");
  }
});
