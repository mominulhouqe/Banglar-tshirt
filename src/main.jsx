import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'

import { 
        createBrowserRouter,
        RouterProvider,
} from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Layout/Main'
import Home from './components/Home/Home'
import About from './components/About/About'
import OrderReview from './components/OrderReview/OrderReview'
import Contact from './components/Contact/Contact'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=>fetch('tshirts.json')
      },
      {
        path: 'about',
        element: <About></About>,
      },
      {
        path: 'order',
        element: <OrderReview />,
      },
      {
        path: 'contact',
        element: <Contact></Contact>,
      },
    ]

  }
])





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
