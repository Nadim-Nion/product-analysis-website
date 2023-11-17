import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Reviews from './components/Reviews/Reviews.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import About from './components/About/About.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import BooksLoader from './loaders/BooksLoader.js';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: BooksLoader
      },
      {
        path: 'reviews',
        element: <Reviews></Reviews>
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      },
      {
        path: 'about',
        element: <About></About>
      }
    ],

  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
