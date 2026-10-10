import { useState, useEffect } from 'react'
import PWABadge from '../../components/PWABadge/index.jsx'
import './index.css'

export default function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/inicio";
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  

  return (
    <>
      <h1>Carregando..</h1>
      <PWABadge />
    </>
  )
}
