import React from 'react';
import './Home.css';
import image from '../../images/Recharge-your-down-battery.jpg';

const Home = () => {
    return (
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
    );
};

export default Home;