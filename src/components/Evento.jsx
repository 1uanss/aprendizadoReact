import React from "react";

function Evento({numero}){
    function meuEvento(){
        console.log(`opa,fui ativado. ${numero}`)
    }
    return(
    <div>
        <p> Clique para ativar o evento</p>
        <button onClick={meuEvento} >Ativar</button>
    </div>
    )
}

export default Evento