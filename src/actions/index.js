const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
}

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}


const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

export const fetchBooks = (disp) => (service) => {
    disp(booksRequested());
    service.getBooks()
        .then(data => disp(booksLoaded(data)))
        .catch(error => disp(booksError(error)));
}

export const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}