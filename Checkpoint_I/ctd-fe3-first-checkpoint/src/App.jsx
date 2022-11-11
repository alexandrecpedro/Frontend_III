// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
//  import './style.scss'

import { useState } from "react";
import { Card } from "./cardComponent/Card";

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [nomeCor, setNomeCor] = useState("");
  const [corHexadecimal, setCorHexadecimal] = useState("");
  const [formularioErro, setFormularioErro] = useState(false);
  const [listaCores, setListaCores] = useState([]);

  function adicionarCor(event) {
    event.preventDefault();

    const novaCorCadastrada = {
      nome: nomeCor,
      cor: corHexadecimal,
    };

    const regex = /[0-9]/;

    if (
      nomeCor.length < 3 ||
      corHexadecimal.length < 7 ||
      corHexadecimal.charAt == "#" ||
      !regex.test(corHexadecimal)
    ) {
      setFormularioErro(true);
    } else {
      setFormularioErro(false);

      setListaCores([...listaCores, novaCorCadastrada]);
      setNomeCor("");
      setCorHexadecimal("");

      console.log(novaCorCadastrada);
    }
  }

  return (
    <body>
      <main className="checkpoint">
        <section
          className={formularioErro ? "form-error" : ""}
          onSubmit={(event) => adicionarCor(event)}
        >
          <div className="section-form">
            <h1 className="section-form-title">ADICIONAR NOVA COR</h1>

            <form className="form">
              <section className="section-form-inputs">
                <div className="section-form-nome-cor">
                  <label className="name-form-label" htmlFor="nomeCor">
                    Nome:{" "}
                  </label>
                  <input
                    className="name-form-input-cor"
                    id="nomeCor"
                    type="text"
                    placeholder="Digite o nome da cor"
                    value={nomeCor}
                    onChange={(event) => setNomeCor(event.target.value.trim())}
                  />
                </div>
                <div className="section-form-nome-hexadecimal">
                  <label className="name-form-label" htmlFor="corHexadecimal">
                    Cor:{" "}
                  </label>
                  <input
                    className="name-form-input"
                    id="corHexadecimal"
                    type="text"
                    placeholder="Insira sua cor no formato Hexadecimal"
                    value={corHexadecimal}
                    onChange={(event) => setCorHexadecimal(event.target.value)}
                  />
                  <input
                    className="section-form-input-type-color"
                    id="corHexadecimal"
                    type="color"
                    placeholder="Insira sua cor no formato Hexadecimal"
                    value={corHexadecimal}
                    onChange={(event) => setCorHexadecimal(event.target.value)}
                  />
                </div>
              </section>
              <button className="button-submit" type="submit">
                ADICIONAR
              </button>
            </form>

            {formularioErro ? (
              <span>Por favor, verifique os dados inseridos no formulário</span>
            ) : null}
          </div>
        </section>
        <section className="section-card">
          <h1 className="section-card-title">CORES FAVORITAS</h1>
          <div className="cards">
            {listaCores.map((card) => {
              return <Card key={card.id} cardCor={card} />;
            })}
          </div>
        </section>
      </main>
    </body>
  );
}

export default App;
