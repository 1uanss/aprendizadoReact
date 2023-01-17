import React from "react";
import PropTypes from "prop-types"

function Item ({fruta, cor}){
   
    return(
        <>
        <li>
            {fruta}-{cor}
         </li>
        </>
    )
}
Item.propTypes ={
    fruta: PropTypes.string.isRequired,
}

export default Item