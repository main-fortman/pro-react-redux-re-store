import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorIndicator from '../error-indicator';
import { withBookstoreService } from '../hoc';
import { CartPage, HomePage } from '../pages';

const App = ({ bookstoreService }) => {
    console.log(bookstoreService.getBooks());
    return (
        <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/cart' component={CartPage}/>
        </Switch>
    )
}

export default withBookstoreService()(App);