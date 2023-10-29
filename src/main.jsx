import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MainLayout } from './Layout/MainLayout'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
