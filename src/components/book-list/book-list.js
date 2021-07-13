import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { booksLoaded, booksRequested, booksError } from '../../actions';
import BookListItem from '../book-list-item';
import BookstoreServiceContext from '../bookstore-service-context';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './styles.css';

const BookList = ({ books, loading, error, fetchBooks }) => {
    
    const service = useContext(BookstoreServiceContext);

    useEffect(() => {
        fetchBooks(service);
    }, [service, fetchBooks]);

    if (loading) {
        return <Spinner/>
    }

    if (error) {
        return <ErrorIndicator/>
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

const mapStateToProps = ({books, loading, error}) => {
    return { books, loading, error };
}

const mapDispToProps = (disp) => {
    return {
        fetchBooks: (service) => {
            disp(booksRequested());
            service.getBooks()
                .then(data => disp(booksLoaded(data)))
                .catch(error => disp(booksError(error)));
        }
    }
}

export default connect(mapStateToProps, mapDispToProps)(BookList);