import React from "react";
import { useState } from "react";
// import imagem from "../Img/imgem.jpg";
// import imagemDois from "../Img/imgemDois.jpg";

function Form(){
    function cadastraUsuario(e){
        e.preventDefault()
        // console.log(name)
        // console.log(Password)
        // console.log('cadastrou com sucesso!')
        console.log(`usuario ${name} foi cadastrado com a senha: ${Password}`)
    }
    const[name, setName] = useState('img')
    const[Password, setPassword] = useState()
    // const[scrImagem, setImagens] = useState(imagem)


    return(
    <div>
        <h1>Meu cadastro!</h1>
        <form onSubmit={cadastraUsuario}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type='text' 
                 id="name" 
                 name="name"
                //  value={name}
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