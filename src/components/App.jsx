import React from 'react';
import '../styles/Login.scss'
import '../styles/global.scss'
import Login from '../containers/Login'
import Layout from '../containers/Layout';

const App = () =>{
    return (
        <Layout>
            <Login/>
        </Layout>
    );
}
export default App;

