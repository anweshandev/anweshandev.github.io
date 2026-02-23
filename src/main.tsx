import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


const isProd = import.meta.env?.PROD || false;

if(isProd) {
	if ('serviceWorker' in navigator) {
	  window.addEventListener('load', () => {
		navigator.serviceWorker.register('/sw.js');
	  });
	}
}

