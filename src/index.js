import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

//pages
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Sobre from './pages/about/Sobre';
import ProductsDetails from './pages/productsDetails/ProductsDetails';


const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  children:[
    {path: '/', element: <Home/>},
    {path: '/produtos/:id', element: <ProductsDetails/>},
    {path: '/produtos', element: <Products/>},
    {path: '/sobre', element: <Sobre/>},
    
  ]

  
}])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

