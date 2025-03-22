import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './config/routes'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={routes} />
  </StrictMode>,
)
