import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className='flex flex-1 h-full w-full justify-center bg-violet-50'>
      <App />
    </div>
  </StrictMode>
);
