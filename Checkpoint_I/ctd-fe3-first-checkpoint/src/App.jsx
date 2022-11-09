import { useState } from "react";
import { Card } from "./components/Card";

// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
function validacaoNomeDaCor(nomeCor) {
  return nomeCor.trim().length > 2;
}

function validacaoCorHexadecimal(corHexadecimal) {
  // const padraoCorHexadecimal = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  const padraoCorHexadecimal = /^#(?:[0-9a-f]{3}){1,2}$/i;
  return padraoCorHexadecimal.test(corHexadecimal);
}

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [nomeCor, setNomeCor] = useState("");
  const [corHexadecimal, setCorHexadecimal] = useState("");
  const [cores, setCores] = useState([]);
  const [formularioErro, setFormularioErro] = useState(false);

  const cadastrarCor = (event) => {
    event.preventDefault();
    if (
      validacaoCorHexadecimal(corHexadecimal) &&
      validacaoNomeDaCor(nomeCor)
    ) {
      setFormularioErro(false);
      let newId = cores.length;

      const novaCorCadastrada = {
        id: newId,
        nomeCor: nomeCor,
        corHexadecimal: corHexadecimal,
      };

      setCores([...cores, novaCorCadastrada]);
      setNomeCor("");
      setCorHexadecimal("");
    } else {
      setFormularioErro(true);
    }
  };

  return (
    <div className="App">
      <section className={formularioErro ? "form-error" : ""}>
        <div className="tittle-wrapper">
          <h1>ADICIONAR NOVA COR</h1>
        </div>

        <form onSubmit={(event) => cadastrarCor(event)}>
          {/* Comece a desenvolver o seu Código por aqui :) */}
          <div className="input">
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
              type="color"
              value={corHexadecimal}
              onChange={(event) => setCorHexadecimal(event.target.value)}
            />
          </div>

          <button type="submit">Adicionar cor</button>
        </form>
      </section>

      {formularioErro ? (
        <span>Por favor, verifique os dados inseridos no formulário</span>
      ) : null}

      <div className="tittle-wrapper">
        <h1>CORES FAVORITAS</h1>
      </div>

      <section>
        {cores.map((cor, index) => (
          <Card key={index} corData={cor} />
        ))}
      </section>
    </div>
  );
}

export default App;
