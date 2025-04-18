import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './config/routes'
import { GlobalStyle } from './styles/globals.styled'
import HeaderLinks from './components/HeaderLinks/HeaderLinks'

createRoot(document.getElementById('root')).render(
  <>
    <StrictMode>
      <GlobalStyle />
      <HeaderLinks />
      <RouterProvider router={routes} />
      </StrictMode>
  </>,
)
