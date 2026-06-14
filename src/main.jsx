import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/global.css'

const container = document.getElementById('root')
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// Pre-rendered pages carry data-ssr="true"; hydrate them instead of replacing.
if (container.dataset.ssr) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
