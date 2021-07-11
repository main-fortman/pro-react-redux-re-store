import React from 'react';
import BookstoreServiceContext from '../bookstore-service-context';

export const withBookstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookstoreServiceContext.Consumer>
                {
                    (bookstoreService) => {
                        return <Wrapped {...props} bookstoreService={bookstoreService} />
                    }
                }
            </BookstoreServiceContext.Consumer>
        )
    }
}