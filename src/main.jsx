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
import Services from './pages/Services';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Error></Error> ,
    children: [
      {
        path:'/',
        element:<Home></Home>
        
      },
      {
        path:'/',
        element:<Service></Service>
        
      },
      {
        path:'/services',
        element: <Services></Services>
        
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
     
       
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


