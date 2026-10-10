import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from '../pages/App/index.jsx'
import Home from '../pages/Home/index.jsx'
import Inicio from '../pages/Inicio/index.jsx';

export default function AppRoutes(){
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<App />}/>
                    <Route path='/home' element={<Home />}/>
                    <Route path='/inicio' element={<Inicio/>}/>

                </Routes>
            </Router>
        </>
    )
}