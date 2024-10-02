import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@styles/main.scss'
import router from '@router//router.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
