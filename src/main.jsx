//Importa React 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Importa estilos de index.css
import './index.css'
//Importa componente App
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
