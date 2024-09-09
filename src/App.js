import React from "react";
import "./App.css";
import chaves from "./assets/chaves.png";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={chaves} className="Chavinho" alt="Lávem o chaveschaves...kkkk" />

        <PasswordGenerator />

        <a
          className="App-link"
          href="https://www.dailymotion.com/video/x8u1ppe"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clique aqui e veja um episódio de Chaves
        </a>
      </header>
    </div>
  );
}

export default App;
