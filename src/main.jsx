import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Create from './components/Create.jsx'
import AllUsers from './components/AllUsers.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path: '/',
        element: <Create/>
      },
      {
        path: '/create',
        element: <Create/>
      },
      {
        path:'/allUsers',
        element: <AllUsers/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
