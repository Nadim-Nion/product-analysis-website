import React from 'react';
import './Home.css';
import image from '../../images/Recharge-your-down-battery.jpg';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';

const Home = () => {
    const books = useLoaderData();

    return (
        <div>
            {/* Book Details */}
            <div className='book-container'>
                <div className='details'>
                    <h1>Recharge Your <br />
                        <span className='own-battery'>Own Battery</span>
                    </h1>
                    <p>Those who are ahead in tune with the times, various initiatives are being taken to take them one step further. But those who are a little behind, even from a good position, who have lost for some reason, will they be disappointed?</p>
                </div>
                <div className='cover-image'>
                    <img src={image} alt="" />
                </div>
            </div>

            {/* Customer Opinion */}
            <div className='customer-review'>
                <h2>Customer Review</h2>
                <div className='book-container'>
                    {
                        books.map(book => <Book
                            key={book.index}
                            book={book}
                        ></Book>)
                    }
                </div>
                <button className='reviews-btn'>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;