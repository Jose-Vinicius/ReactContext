import React, { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

import Card from "../../components/Card";

import { UserContext, useUserContext } from "../../context/User";

import './style.scss'

export default function Home() {
    const { user, posts } = useContext(UserContext)
    const { userSignOut} = useUserContext()
    const navigate = useNavigate()
    function handleSubmit(){
        navigate('../create', {replace: true})
    }
    return (
        <div className="home-container">
            <h1>{user?.displayName}</h1>
            <button onClick={handleSubmit}>Criar card</button>
            
            <button onClick={userSignOut}>Voltar</button>
            
            <div className="cards">
               {
                posts.map((item) => {
                    return(
                        <Card 
                            teste={item.id}
                            titulo={item.titulo}
                            mensagem={item.mensagem}
                            usuario={item.usuario}
                        />
                    )
                })
               }
                
            </div>
        </div>

    )
}