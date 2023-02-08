import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import MenuRoutes from './MenuRoutes';

function App() {

  return (
    <div className="App">
      <ToastContainer  autoClose  = {1000} />
        <MenuRoutes />
    </div>
  )
}

export default App
