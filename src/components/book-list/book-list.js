import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBooks, bookAddedToCart } from '../../actions';
import BookListItem from '../book-list-item';
import BookstoreServiceContext from '../bookstore-service-context';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './styles.css';

const BookListContainer = ({ books, loading, error, fetchBooks, onAddedToCart }) => {
    
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

    return <BooksList books={books} onAddedToCart={onAddedToCart}/>
}

BookListContainer.propTypes = {
    books: PropTypes.array
}

const BooksList = ({books, onAddedToCart}) => {
    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem
                                book={book}
                                onAddedToCart={() => onAddedToCart(book.id)}
                                />
                        </li>
                    )
                })
            }
        </ul>
    )
}

const mapStateToProps = ({books, loading, error}) => {
    return { books, loading, error };
}

const mapDispToProps = (disp) => {
    return {
        fetchBooks: fetchBooks(disp),
        onAddedToCart: (id) => disp(bookAddedToCart(id))
    }
}

export default connect(mapStateToProps, mapDispToProps)(BookListContainer);