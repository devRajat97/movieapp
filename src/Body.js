import React from 'react'
import Login from './Components/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './Components/Browse'
import ErrorPage from './Components/ErrorPage'

const Body = () => {

    const router = createBrowserRouter([
        {
            path : "/",
            element : <Login/>
        },
        {
            path : "/Browser",
            element : <Browse/>
        },{
          path:"/erorrPage",
          element: <ErrorPage/>
        }
    ])

  

  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  )
}

export default Body
