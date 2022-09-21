import React from 'react';
import './style.scss';

export default function Error(){
    return(
        <div className='error-container'>
            <h1>Acho que você não ira achar oque procura aqui!</h1>
            <img src="/error404.jpg"/>
        </div>
    )
}