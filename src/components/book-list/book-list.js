import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { booksLoaded } from '../../actions';
import BookListItem from '../book-list-item';
import BookstoreServiceContext from '../bookstore-service-context';

import './styles.css';

const BookList = ({ books, booksLoaded }) => {
    
    const service = useContext(BookstoreServiceContext);

    useEffect(() => {
        booksLoaded(service.getBooks());
    }, []);

    return (
        <ul className="book-list">
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

const mapStateToProps = ({books}) => {
    return { books };
}

const mapDispToProps = {
    booksLoaded
}

export default connect(mapStateToProps, mapDispToProps)(BookList);