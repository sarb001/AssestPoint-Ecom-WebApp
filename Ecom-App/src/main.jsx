// import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppProvider } from './Components/ContextApi/ProductContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AppProvider>
            {/* <ChakraProvider> */}
                <App />
            {/* </ChakraProvider> */}
    </AppProvider>
)
