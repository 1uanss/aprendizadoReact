import React from "react";

function Button(props){
    return<Button onClik={props.event}>{props.text}</Button>
}
export default Button

