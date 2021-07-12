import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withBookstoreService } from '../hoc';
import { CartPage, HomePage } from '../pages';
import ShopHeader from '../shop-header';

const App = ({ bookstoreService }) => {
    console.log(bookstoreService.getBooks());
    return (
        <main role="main" className='container'>
            <ShopHeader numItems={5} total={210}/>
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/cart' component={CartPage}/>
            </Switch>
        </main>
    )
}

export default withBookstoreService()(App);