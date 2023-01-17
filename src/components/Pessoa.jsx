// import React from "react";

// function Pessoa({foto,nome,idade,profissao}){
//     return(
//         <div>
//             <img src={foto} alt={nome} />
//             <h2>Nome: {nome}</h2>
//             <p>Iadade: {idade}</p>
//             <p>Profissao: {profissao}</p>
//         </div>
//     )
// }

// export default Pessoa
import React from "react";

function Pessoa(props){
    const {backgroundColor,color,foto,nome,idade,profissao} = props
    const nomeComplet = {
        backgroundColor,
        color,
    }
    return(
        <div>
            <img src={foto} alt={nome} />
            <h2 style={nomeComplet} >luan</h2>
            <p>Iadade: {idade}</p>
            <p>Profissao: {profissao}</p>
        </div>
    )
}

export default Pessoa