import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ShopProvider } from './Context/Context.jsx'

createRoot(document.getElementById('root')).render(
    <ShopProvider>
      <App />
    </ShopProvider>
)
