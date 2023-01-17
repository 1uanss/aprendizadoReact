// import { useState } from "react";
import "./App.css";
// import HelloWord from "./components/HelloWord";
// import SayMyName from "./components/SayMyName"
// import Pessoa from "./components/Pessoa";
// import Frase from "./components/Frase";
import List from "./components/List";


function App() {
    // const [nomePesoa]= useState([
    //   {backgroundColor: "#FF6363", color: 'silva'},
    //   {backgroundColor: "#FF6363", color: 'silva'},
    //   {backgroundColor: 'luan', color: "#FF6363"},
    //   {backgroundColor: 'juka', color: "#FF6363"},
    //   {backgroundColor: "#FF6363", color: "#FF6363"}
    
    // ])

  return (
    <div className="App">
      {/* <HelloWord/> */}
      {/* <h1>testando css</h1> */}
      {/* <SayMyName nome="luan"/>
      <SayMyName nome="ana" />
      <Frase/>
      <Frase/> */}
      {/* {
      nomePesoa.map((style, idx) => <Pessoa key={idx} backgroundColor={style.backgroundColor} color={style.color}/>)
      } */}
      {/* <Pessoa idade="24" profissao="futuro programador" foto="https://via.placeholder.com/150"/> */}
      <List/>
    </div>
  );
}

export default App;
