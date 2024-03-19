import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root';
import Error from './pages/Error';
import Home from './pages/Home';
import Service from './pages/Services';
import About from './pages/About';
import Faq from './pages/Faq';
import Login from './pages/Login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Error></Error> ,
    children: [
      {
        path:'/',
        element:<Home></Home>
        element:<Service></Service>
        
      },
      {
        path:'/service',
        element: <Service></Service>
        
      },
      {
        path:'/about',
        element:<About></About>
        
      },
      {
        path:'/faq',
        element:<Faq></Faq>
        
      },
      {
        path:'/login',
        element:<Login></Login>
        
      },
      {
        path:'/',
        element:
        
      },
       
    ]
  },
]);

<RouterProvider router={router} />

