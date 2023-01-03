import { useState } from "react";
import "./App.css";
import HelloWord from "./components/HelloWord";

function App() {
  // const [totalClicks, setTotalClicks] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const name = "luan";
  const newName = name.toLocaleUpperCase();
  function aumentaClicks() {
    setTotalClicks(totalClicks + 1);
  }
  function sum(a, b) {
    return a + b;
  }
  const url = "https://via.placeholder.com/150";

  return (
    <div className="App">
      <h1>ola react mudando jsx!!</h1>
      <p>ola {newName}</p>
      <p>soma:{sum(1, 2)}</p>
      <img src={url} alt="mnha imagem" />
      <span>contagem de clicks: {totalClicks}</span>
      <button onClick={aumentaClicks}>Aumentar clicks</button>
      {/* <samp>contagem de clicks:{totalClicks}</samp>
      <button onClick={aumentaClicks}>aumentar click</button> */}
      <HelloWord/>
    </div>
  );
}

export default App;
