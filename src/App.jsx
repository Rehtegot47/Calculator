import "./App.css"

import Nav from "./components/Nav.jsx"
import Body from "./components/Body.jsx"
import Footer from './components/Footer.jsx'

import Home from "./components/Home.jsx"

import About from "./components/About.jsx"

import Services from "./components/Services.jsx"

import Contacts from "./components/Contacts.jsx"

import Emmanuel from "./components/Emmanuel.jsx"

import { createBrowserRouter, RouterProvider } from "react-router-dom"


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
      children: [
        {
          path: "/",
          element:<Body/>
        },
        {
          path: "/about",
          element:<About/>
        },
        {
          path: "/services",
          element:<Services/>
        },
        {
          path: "/contacts",
          element:<Contacts/>
        },
        {
          path: "/emmanuel",
          element:<Emmanuel/>
        },
      ]
    },
    {

    }
  ])
  

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
