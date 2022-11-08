// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
import { useState } from "react";
import { Card } from "./Card";

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [nomeCor, setNomeCor] = useState('');
  const [corHexadecimal, setCorHexadecimal] = useState('');
  const [cores, setCores] = useState([]);
  const [formularioErro, setFormularioErro] = useState(false);

  const cadastrarCor = (event) => {
    event.preventDefault();

    const novaCorCadastrada = {
      nome: nomeCor,
      corHexadecimal: corHexadecimal
    }
      // #fa4537 ou #000  azul, vermelho, verde
    if ((corHexadecimal !== /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/) || (nomeCor.trim().length < 3)) {
      setFormularioErro(true);
    } else {
      setFormularioErro(false);

      setCores([...cores, novaCorCadastrada]);
      setNomeCor('');
      setCorHexadecimal('');
    }
  }

  return (
    <div className="App">
      <h1>ADICIONAR NOVA COR</h1>
      <form onSubmit={event => cadastrarCor(event)}>
        {/* Comece a desenvolver o seu Código por aqui :) */}
        <div>
          <label htmlFor="nomeCor">Nome</label>
          <input
            id="nomeCor"
            type="text"
            value={nomeCor}
            onChange={(event) => setNomeCor(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="corHexadecimal">Cor</label>
          <input
            id="corHexadecimal"
            placeholder="Insira sua cor no formato hexadecimal"
            type="text"
            value={corHexadecimal}
            onChange={(event) => setCorHexadecimal(event.target.value)}
          />
        </div>

        <button type="submit">Adicionar cor</button>
        <button type="reset">Limpar formulário</button>
      </form>
      
      {formularioErro ? <span>Por favor, verifique os dados inseridos no formulário</span> : null}

      <section>
        <h1>CORES FAVORITAS</h1>
        {cores.map((cor) => (
          <Card cores={cor} />
        ))}
      </section>
    </div>
  );
}

export default App;
