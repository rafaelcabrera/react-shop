import React from 'react';
import '../styles/Login.scss'
import '../styles/global.scss'
import Login from '../containers/Login'
import Layout from '../containers/Layout';
import RecoveryPassword from '../containers/RecoveryPasword'
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () =>{
    return (
        <BrowserRouter>
        <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/recovery-password" element={<RecoveryPassword />} />
                <Route path="*" element={<NotFound />} />
        </Routes>        
        </Layout>
      </BrowserRouter>
    );
}
export default App;

