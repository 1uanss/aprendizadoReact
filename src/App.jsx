// import { useState } from "react";
import "./App.css";
import Evento from "./components/Evento";
// import Form from "./components/Form";
import TesteUse from "./components/UseState";
// import AumentaNumber from "./components/AumentaNumber";

function App() {
  return (
    <div className="App">
      <h1>Testando eventos</h1>
      <Evento numero='1'/>
      {/* <Evento numero={'2'}/> */}
      {/* <Form/> */}
    <TesteUse/>
      {/* <AumentaNumber/> */}
    </div>
  );
}

export default App;
