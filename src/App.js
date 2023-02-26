import React from 'react'
import './App.css';
import { HomePage } from './Components/HomePage/HomePage';
import {createBrowserRouter, RouterProvider,} from "react-router-dom"
import { ProductPage } from './Components/productPage/ProductPage';
import { ProductDetail } from './Components/productDetails/ProductDetail';
import { EditProduct } from './Components/editProduct/EditProduct';
import { AddProduct } from './Components/addProduct/AddProduct';
function App() {
  const router = createBrowserRouter([
    {
      path:'/home',
      element:<HomePage/>

    },
    {
      path:'/',
      element:<HomePage/>

    },{
      path:'/products',
      element:<ProductPage/>,

    },{
      path:"/products/:productId",
      element:<ProductDetail/>
    },{
      path:"/products/:productId/edit",
      element:<EditProduct/>
    },{
      path:"/add",
      element:<AddProduct/>
    }

  ])
  return (
   <div className='App'>
     <RouterProvider router={router}/>
   </div>
  );
}

export default App;
