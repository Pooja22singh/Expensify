import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import ExpenseDashboardPage from '../Components/ExpenseDashboardPage';
import LoginPage from '../Components/LoginPage';
import AddExpensePage from '../Components/AddExpenseDash';
import EditExpensePage from '../Components/EditExpensePage';
import HelpPage from '../Components/HelpPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

//Router configuration
export const history = createHistory();
const AppRouter = ()=>(
    <Router history= {history}>
    <div>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
            <PrivateRoute path="/create" component={AddExpensePage} />
            <PrivateRoute path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
        </Switch>
    </div>
    </Router>
);
export default AppRouter;