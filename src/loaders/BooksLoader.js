const BooksLoader = async () => {
    const loadedBooks = await fetch('books.json');
    const books = loadedBooks.json();
    return books;
}

export default BooksLoader;