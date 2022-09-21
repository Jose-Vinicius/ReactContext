import React from 'react'
import { useUserContext } from '../../context/User'
import './style.scss'

export default function Card(props){
    const {deleteItens} = useUserContext()
    
    return(
        <div className='card-container' key={props.teste}>
            <button onClick={() => {deleteItens(props.teste)}}>X</button>
            <h1>{props.titulo}</h1>
            <p>{props.mensagem}</p>
            <small>{props.usuario}</small>
        </div>
        
    )
}