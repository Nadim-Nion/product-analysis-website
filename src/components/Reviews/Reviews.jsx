import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';
import './Reviews.css';

const Reviews = () => {
    const books = useLoaderData();
    return (
        <div className='reviews'>
            <h2>What do our customers say?</h2>
            {/* Customer Opinion  */}
            <div className='book-container'>
                {
                    books.map(book => <Book
                        key={book.index}
                        book={book}
                    ></Book>)
                }
            </div>
        </div>
    );
};

export default Reviews;