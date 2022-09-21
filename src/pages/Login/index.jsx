import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { UserContext, useUserContext} from '../../context/User';
import './style.scss'

export default function Login(){
    const navigate = useNavigate()
    const { user } = useContext(UserContext);
    const { Login } = useUserContext()
    function cardhandleClick(){
        Login()
        
    }

    useEffect(() => {
        if(user != null){
            navigate('../home', { replace: true })
        }
    },[user])

    return(
       <div className="login-container">
            <h1>Login</h1>
            <button onClick={cardhandleClick}>
                Clique aqui para fazer login
            </button>
       </div>
        
    )
}