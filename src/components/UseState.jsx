import React from "react";
import { useState } from "react";
//Geraenciar o estado de algum valor
//getter e setter

function TesteUse(){
    const [name, setName] = useState("luan")
    const [number, setNumber] = useState(1);
    console.log(name)

    const changeNumber = () =>{
        //uso do previos value.
    //    setNumber((prevNumber) => prevNumber + 1)
    //    setNumber((prevNumber) => prevNumber + 1)
        //uso do set number para alterar valor,somar mudar o estado.
        setNumber(number + 1)
       
    }


    return(
        <div>
            <h2>Meu nome é:{name}</h2>
            <input type='text' value={name} onChange={e=> setName(e.target.value) }/>
            <div>
                <p>Meu numero {number}</p>
                <button onClick={changeNumber}>mudar numero</button>
            </div>
        </div>
    )
}
export default  TesteUse