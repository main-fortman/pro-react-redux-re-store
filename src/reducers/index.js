const initState = {
    books: [],
    loading: true,
    error: null
}

const reducer = (state = initState, action) => {

    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                books: [],
                loading: true,
                error: null
            }
        case 'FETCH_BOOKS_SUCCESS':
            return {
                books: action.payload,
                loading: false,
                error: null
            }
        case 'FETCH_BOOKS_FAILURE':
            return {
                books: [],
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;