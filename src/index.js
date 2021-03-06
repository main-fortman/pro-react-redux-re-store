import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import { BookstoreService } from './services';
import store from './store';
import ErrorBoundary from './components/error-boundary';
import BookstoreServiceContext from './components/bookstore-service-context';
import { BrowserRouter } from 'react-router-dom';

const bookstoreService = new BookstoreService();

ReactDom.render(
    <Provider store={store}>
        <ErrorBoundary>
            <BookstoreServiceContext.Provider value={bookstoreService}>
                <BrowserRouter>
                    <App />
            </BrowserRouter>
            </BookstoreServiceContext.Provider>
        </ErrorBoundary>

    </Provider>,
    document.getElementById('root')
);