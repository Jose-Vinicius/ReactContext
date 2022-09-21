import { createContext, useContext, useEffect, useState } from "react";

import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();
UserContext.displayName="userContext"

export const UserProvider = ({children}) => {
    const provider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState([])
    return( 
        <UserContext.Provider 
            value={{
                provider,
                user, 
                setUser,
                posts, 
                setPosts
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    const {provider, setUser, user, setPosts } = useContext(UserContext)
    let navigate = useNavigate();
    const dbName = "UserItens"

    async function Login(){
        await signInWithPopup(auth, provider)
        .then((result) => {
           setUser(result.user);
        })
        .catch((error) => {
            console.log(error)
        })
    }

    async function userSignOut(){
        try {
            await signOut(auth);
            console.log('usuario desconectado');
            navigate('/login', { replace: true });
            setUser(null);
        } catch (error) {
            console.log(error);
        }
    }
    async function readItens(){
        const querySnapshot = await getDocs(collection(db, dbName));
        setPosts(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    async function deleteItens(id){
        try{
            await deleteDoc(doc(db, dbName, id)); 
            console.log("deleted")
            readItens()
        } catch(error){
            console.log(error)
        }
        
    }

    async function createCard(usuario, titulo, mensagem){
        try{
            const docRef = await addDoc(collection(db, dbName),{
                usuario: usuario,
                titulo: titulo,
                mensagem: mensagem
            });
            console.log("Document written with ID: ", docRef.id);
        } catch(error){
            console.error("Error adding document: ", e);
        }
    }

    function errorLoad(){
        console.log('carregado')
        setUser(null)
      
    }

    window.onload = errorLoad

    useEffect(() => {
        if(user === null){
            navigate("../login", {replace: true})
        }
        readItens()
        
    }, [user, setPosts])

    return{
        Login,
        userSignOut,
        readItens,
        createCard,
        deleteItens
    }
}