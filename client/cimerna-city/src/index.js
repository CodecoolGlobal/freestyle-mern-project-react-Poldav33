import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import Layout from "./Pages/Layout";
import ErrorPage from './Pages/ErroPage';
// import HomePage from './Pages/HomePage';
import RoomUpdate from './components/RoomUpdate';
import RoomList from './components/RoomList';
import RoomAdd from './components/RoomAdd';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/rooms",
        element: <RoomList />
      },
      {
        path: "/room/update/:id",
        element: <RoomUpdate />
      },
      {
        path: '/room/add',
        element: <RoomAdd />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
