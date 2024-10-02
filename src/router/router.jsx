import { createBrowserRouter } from 'react-router-dom'
import HomePage from '@components/pages/HomePage/HomePage.jsx'
import { NotFound } from '@components/pages/NotFound/NotFound.jsx'
import App from '../App.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router
