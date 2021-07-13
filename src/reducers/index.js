const initState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 220
}

const reducer = (state = initState, action) => {
    console.log("reducer type", action.type);
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            }
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            }
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            }
        case 'BOOK_ADDED_TO_CART':
            const bookId = action.payload;
            const book = state.books.find((book) => book.id === bookId);
            const itemIndex = state.cartItems.findIndex((item) => item.id === bookId);
            const item = state.cartItems[itemIndex];
             
            const newItem = addBookToCartItem(book, item);
            return {
                ...state,
                cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
            }
        case 'BOOK_REMOVED_FROM_CART':
            return {
                ...state,
                cartItems: removeBook(state.cartItems, action.payload)
            }
        case 'CART_ITEM_REMOVED':
            return {
                ...state,
                cartItems: removeCartItem(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

const updateCartItems = (cartItems, item, index) => {
    if (index === -1) {
        return [...cartItems, item]
    }
    return [
        ...cartItems.slice(0, index),
        item,
        ...cartItems.slice(index + 1)
    ]
}

const addBookToCartItem = (book, item = {}) => {
    const { id = book.id, count = 0, title = book.title, total = 0 } = item;
    return {
        id,
        title,
        count: count + 1,
        total: total + book.price
    };
}

const removeBook = (cartItems, bookId) => {
    const item = cartItems.find(item => item.id === bookId);
    if (item.count > 1) {
        const itemIndex = cartItems.findIndex((item) => item.id === bookId);
        const newItem = {
            ...item,
            count: item.count - 1,
            total: item.total - (item.total / item.count)
        };
        return updateCartItems(cartItems, newItem, itemIndex);
    }
    return removeCartItem(cartItems, bookId);
}

const removeCartItem = (cartItems, bookId) => {
    return cartItems.filter(item => item.id !== bookId);
}

export default reducer;