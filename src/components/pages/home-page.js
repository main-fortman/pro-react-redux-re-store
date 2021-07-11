import React, { useContext } from 'react';
import BookList from '../book-list/book-list';
import BookstoreServiceContext from '../bookstore-service-context';

const HomePage = () => {
    const service = useContext(BookstoreServiceContext);
    return (
        <div>
            <BookList books={service.getBooks()}/>
        </div>
    )
}

export default HomePage;