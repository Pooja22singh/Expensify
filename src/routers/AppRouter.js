import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ExpenseDashboardPage from '../Components/ExpenseDashboardPage';
import LoginPage from '../Components/LoginPage';
import AddExpensePage from '../Components/AddExpenseDash';
import EditExpensePage from '../Components/EditExpensePage';
import HelpPage from '../Components/HelpPage';
import NotFoundPage from '../Components/NotFoundPage';
import Header from '../Components/Header';
//Router configuration
const AppRouter = ()=>(
    <BrowserRouter>
    <div>
   
    <Header/>
        <Switch>
            <Route path="/" component={LoginPage} exact={true} />
            <Route path="/dashboard" component={ExpenseDashboardPage} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
    </BrowserRouter>
);
export default AppRouter;