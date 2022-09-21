import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext, useUserContext } from "../../context/User";
import './style.scss'

export default function CreateItem(){
    const { user} = useContext(UserContext)
    const { createCard } = useUserContext()
    const [titulo, setTitulo] = useState('')
    const [mensagem, setMensagem] = useState('')
    
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        createCard(user.displayName, titulo, mensagem)
        setTitulo('')
        setMensagem('')
    }

    return(
        <div className="cardForm-container">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="titulo"
                    value={titulo}
                    onChange={e => setTitulo(e.target.value)}/>
                <textarea
                    type="text"
                    rows="5" 
                    cols="33"
                    placeholder="Mensagem"
                    maxLength="100"
                    minLength="4"
                    value={mensagem}
                    onChange={e => setMensagem(e.target.value)}
                ></textarea>

                <button>enviar</button>
            </form>
            <button onClick={() => navigate('../home', {replace: true})}>Voltar</button>
        </div>
    )
}