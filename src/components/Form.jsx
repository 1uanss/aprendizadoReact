import React from "react";
import { useState } from "react";

function Form(){
    function cadastraUsuario(e){
        e.preventDefault()
        console.log(name)
        console.log(Password)
        console.log('cadastrou com sucesso!')
    }
    const[name, setName] = useState()
    const[Password, setPassword] = useState()


    return(
    <div>
        <h1>Meu cadastro!</h1>
        <form onSubmit={cadastraUsuario}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type='text' 
                 id="name" 
                 name="name"
                 placeholder="Digite o seu nome" 
                 onChange={(e)=>setName(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor="Password">Password</label>
                <input type='Password'
                 id="Password" 
                 name="Password" 
                 placeholder="Digite sua senha" 
                 onChange={(e)=>setPassword(e.target.value)} ></input>
            </div>
            <div>
                <input type="submit" value='cadastra' />
            </div>
        </form>
    </div>
    )
}
export default Form