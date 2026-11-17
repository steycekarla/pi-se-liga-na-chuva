import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PWABadge from '../../components/PWABadge/index.jsx'
import './index.css'

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/inicio", { replace: true });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <h1>Carregando...</h1>
      <PWABadge />
    </>
  )
}
