import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Registration from './pages/Registration.jsx'
import Login from './pages/Login.jsx'
import Navbar from './pages/Navbar.jsx'
import HomePage from './pages/Homapage.jsx'
import Livraison from './pages/Livraison.jsx'
import Promotion from './pages/Promotion.jsx'
import Nouveaute from './pages/Nouveaute.jsx'
import Services from './pages/Services.jsx'
import Aide from './pages/Aide.jsx'

let router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path:"/home",
        element: <HomePage/>
      },
      {
        path: "/registration",
        element: <Registration/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/livraison",
        element: <Livraison/>
      },
      {
        path: "/promotion",
        element: <Promotion/>
      },
      {
        path: "/nouveautés",
        element: <Nouveaute/>
      },
      {
        path: "/services",
        element: <Services/>
      },
      {
        path: "/besoin",
        element: <Aide/>
      },
    ]
  }
  

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
