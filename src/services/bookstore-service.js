export default class BookstoreService {

    getBooks() {
        return [
            {
                id: 1,
                title: 'Production-Ready',
                author: 'Susan J.Fowler',
                price: 32,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/81D4AHNvMsL.jpg'
            },
            {
                id: 2,
                title: 'Release It!',
                author: 'Michael T. Nygard',
                price: 45,
                coverImage: 'https://mxsmirnov.files.wordpress.com/2016/08/releaseit.jpg'
            }
        ];
    }

}