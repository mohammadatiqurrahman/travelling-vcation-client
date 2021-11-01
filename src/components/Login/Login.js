import React from 'react';
// import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInWithGoogle} = useAuth()
    return (
        <div>
            <h3>Please Login</h3>
            <button onClick={signInWithGoogle}>Google Sign in</button>
        </div>
    );
};

export default Login;