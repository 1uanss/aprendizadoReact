import React from "react";
import { useState } from "react";
// import imagem from "../Img/imagem.jpg"
// import imagemDois from "../Img/imgemDois.webp";

function AumentaNumber(){
    const[imagem, setImagem] = useState('imagem.jpg')
    // const trocarImg = ()  =>{
    //     setImagem("logo192.png")
       
        
    // }
    function TrocaImg(){
        if("logo192.png" === imagem){
            (setImagem("imagem.jpg"))
        } else if("imagem.jpg" === imagem){
            (setImagem("logo192.png"))
        }
       
    }
   
    
    return(
        <div>
            <h1>Troca imagem </h1>
            <img src={imagem} alt="img" />
            <button onClick={TrocaImg}>amuntando número</button>
        </div>
    )
}

export default AumentaNumber