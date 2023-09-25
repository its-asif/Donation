import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Donation from './components/Donation';
import ErrorPage from './components/ErrorPage';
import DonationDetails from './DonationDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
        path : '/',
        element: <Home></Home>,
        loader: () => fetch('data.json'),
      },
      {
        path : '/donation',
        element : <Donation></Donation>,
        loader: () => fetch('data.json'),
      },
      {
        path : '/donationDetails/:id',
        element : <DonationDetails/>,
        loader: () => fetch('data.json'),
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
