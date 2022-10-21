import './index.css'
import App from '@/components/App/App'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

const protocol = import.meta.env.PROD ? 'https:' : 'http:';

if (window.location.protocol === protocol) {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/sw.js');
	}	
}
