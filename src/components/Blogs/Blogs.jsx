import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='qna-container'>
            <div className='qna'>
                <h3>Q.1 What is Context API? Why it is used in React Router?</h3>
                <p>
                    The Context API in React is a mechanism for sharing state between components without passing props explicitly through each level of the component tree. It is used to avoid props drilling. It provides a way to pass data through the component tree without having to pass props down manually at every level.

                    React Router utilizes the Context API to manage the state of the router (such as the current URL) across the application. This allows components to access the router state without having to explicitly pass it down as props. The Context API simplifies state management in React Router by providing a centralized way to access and update the router state across the application.
                </p>
            </div>
            <div className='qna'>
                <h3>Write down the differences among Inline, Block and Inline-Block elements?</h3>
                <p>
                    The differences among Inline, Block and Inline-Block are written below:
                    <br />
                    <br />


                    <strong>Inline Elements:</strong> Inline elements do not start on a new
                    line and only take up as much width as necessary.

                    Examples:{' '}
                    <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, and{' '}
                    <code>&lt;strong&gt;</code>.
                    <br />
                    <br />

                    <strong>Block Elements:</strong> Block elements start on a new line and
                    take up the full width available.

                    Examples: <code>&lt;div&gt;</code>,{' '}
                    <code>&lt;p&gt;</code>, and <code>&lt;h1&gt;</code>.
                    <br />
                    <br />

                    <strong>Inline-Block Elements:</strong> Inline-block elements are similar
                    to inline elements but can have block-level properties like width and
                    height. They flow with surrounding content but can have dimensions and
                    vertical margins.

                    Examples: <code>&lt;img&gt;</code>,{' '}
                    <code>&lt;button&gt;</code>, and elements with{' '}
                    <code>display: inline-block</code> CSS.
                    <br />
                    <br />
                </p>
            </div>
        </div>
    );
};

export default Blogs;