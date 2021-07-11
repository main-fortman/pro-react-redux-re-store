import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import BookListItem from '../book-list-item';

const BookList = ({ books }) => {
    
    useEffect(() => {

    }, []);

    return (
        <ul>
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem book={book}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}

BookList.propTypes = {
    books: PropTypes.array
}

export default BookList;