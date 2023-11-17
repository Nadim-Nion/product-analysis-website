import React from 'react';
import './Book.css';

const Book = ({ book }) => {
    const { name, comment, rating } = book;
    return (
        <div className='book'>
            <h3>Name: {name}</h3>
            <p>{comment}</p>
            <p>Rating: {rating}</p>
        </div>
    );
};

export default Book;