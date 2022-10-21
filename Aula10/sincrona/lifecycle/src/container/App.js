import "../styles/styles.css";
import Pessoa from "../components/Pessoa";
import { useState } from "react";

export default function App() {
  const [visibleComponent, setVisibleComponent] = useState(true);

  return (
    <div className="App">
      {visibleComponent && <Pessoa />}
      <button>Sumir</button>
    </div>
  );
}

// Criação
// Montagem
// Atualização
// Desmontagem
