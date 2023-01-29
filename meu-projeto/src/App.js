import './App.css';

function App() {
  const name = "jsx".toUpperCase();
  const url = "https://camo.githubusercontent.com/1108a19aa703d4a4917ccce3637e33384c454359fd1c9a3630287b5e57208fc2/68747470733a2f2f692e70696e696d672e636f6d2f353634782f31302f61372f39362f31306137393630323862356633373366353334313132666661336164333362642e6a7067";

  function calc(a,b) {
    return a + b;
  }

  return (
    <div className="App">
      <h1>Alterando {name}</h1>
      <h2>Resultado: {calc(2,2)}</h2>
      <img className="image" src={url} alt="2b"></img>
    </div>
  );
}

export default App;
