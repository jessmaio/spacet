import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './assets/style/index.css'
import './assets/style/style.css'
import App from './App.jsx'
import Dest from './components/Dest.jsx'
import Crew from './components/Crew.jsx'
import Tech from './components/Tech.jsx'


const router = createBrowserRouter([
  { //Home
    path: "/",
    element: <App />
  },
  { //Destination
    path: "/dest",
    element: <Dest />
  },
  { //Crew
    path: "/crew",
    element: <Crew />
  },
  { //Technology
    path: "/tech",
    element: <Tech />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
