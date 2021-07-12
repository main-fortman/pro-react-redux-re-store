import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { booksLoaded, booksRequested } from '../../actions';
import BookListItem from '../book-list-item';
import BookstoreServiceContext from '../bookstore-service-context';
import Spinner from '../spinner';

import './styles.css';

const BookList = ({ books, loading, booksRequested, booksLoaded }) => {
    
    const service = useContext(BookstoreServiceContext);

    useEffect(() => {
        booksRequested();
        service.getBooks()
            .then(data => booksLoaded(data));
    }, []);

    if (loading) {
        return <Spinner/>
    }

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

const mapStateToProps = ({books, loading}) => {
    return { books, loading };
}

const mapDispToProps = {
    booksLoaded,
    booksRequested
}

export default connect(mapStateToProps, mapDispToProps)(BookList);