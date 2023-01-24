import React from "react";
import Button from "./event/Button";


function Evento({numero}){
    function meuEvento(){
        console.log(`opa,fui ativado. ${numero}`)
    }
    return(
    <div>
        <p> Clique para ativar o evento</p>
        <Button Event={meuEvento} text="primeiro evento"/>
        {/* <button onClick={meuEvento} >Ativar</button> */}
    </div>
    )
}

export default Evento