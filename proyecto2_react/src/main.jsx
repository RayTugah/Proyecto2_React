import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navigation from './navigation/navigation'
import { FeedbackProvider } from './context/FormularioContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FeedbackProvider>
      <Navigation />
    </FeedbackProvider>
  </StrictMode>,
)
