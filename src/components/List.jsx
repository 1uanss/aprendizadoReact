import React from "react";
import Item from "./Iten";

function List(){
    return (
        <>
        <h1>Lista</h1>
        <ul>
            <Item fruta={'abacate'} cor={'verde'}/>
            <Item fruta={'laranja'} cor={'laranja'}/>
            <Item fruta="maça" cor={'verde'} />
        </ul>
        </>
    )
}
export default List