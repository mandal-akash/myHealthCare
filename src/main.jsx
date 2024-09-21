import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';

const router =  createBrowserRouter ([
  {
    path: "/",
    element: <App/>,
    children: [
      {
      path: "/",
      element: <Hero/>
      },
      {
        path: "/services",
        element: <Services/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
