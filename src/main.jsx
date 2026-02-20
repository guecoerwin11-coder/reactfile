import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counts from './reactpart1/part1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counts/>
  </StrictMode>,
)
