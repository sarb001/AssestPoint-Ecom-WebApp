import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CartProvider } from './Components/ContextApi/CartContext'
import { AppProvider } from './Components/ContextApi/ProductContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AppProvider>
        <CartProvider>
                <App />
        </CartProvider>
    </AppProvider>
)
