import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import BookstoreServiceContext from '../bookstore-service-context';
import { bindActionCreators } from 'redux';
import {booksLoaded} from '../../actions';

const BookList = ({ books, booksLoaded }) => {
    
    const service = useContext(BookstoreServiceContext);

    useEffect(() => {
        booksLoaded(service.getBooks());
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

const mapStateToProps = ({books}) => {
    return { books };
}

const mapDispToProps = {
    booksLoaded
}

export default connect(mapStateToProps, mapDispToProps)(BookList);