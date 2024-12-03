import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import Balatro from './Balatro.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Balatro />
  </StrictMode>,
)
