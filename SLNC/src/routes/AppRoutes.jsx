import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import App from '../pages/App/index.jsx'
import Cadastro from '../pages/Cadastro/index.jsx';
import ConfiguracaoLocal from '../pages/ConfiguracaoLocal/index.jsx';
import Home from '../pages/Home/index.jsx'
import Inicio from '../pages/Inicio/index.jsx';
import Login from '../pages/Login/index.jsx';
import Previsao from '../pages/Previsao/index.jsx';

export default function AppRoutes(){
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<App />}/>
                    <Route path='/cadastro' element={<Cadastro/>}/>
                    <Route path='/configuracaolocal' element={<ConfiguracaoLocal/>}/>
                    <Route path='/home' element={<Home />}/>
                    <Route path='/inicio' element={<Inicio/>}/>
                    <Route path='/localizacao' element={<Previsao initialSlide={2}/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/previsao' element={<Previsao/>}/>
                    <Route path='/riscos' element={<Previsao initialSlide={1}/>}/>
                    <Route path='*' element={<Navigate to="/" replace/>}/>
                </Routes>
            </Router>
        </>
    )
}