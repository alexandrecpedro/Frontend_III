//Importando o nosso componente Box;
import { Box } from './Box'
//Importando useState
import { useState } from 'react'

//Criação do componente em formato de função
function App() {

  const animais = ["Cachorro", "Gato", "Macaco"];

  const [valor, setValor] = useState(0);
  const alteraValor = () => setValor(valor + 1);

  return (
    <>
      {
        animais.map((item, index) => {
          return (
            // <li key={index.toString()}>{item}</li>
            <Box item={item} key={index.toString()} />
          )
        })
      }

      <h1>{valor}</h1>
      <button onClick={alteraValor}>Alterar</button>
    </>
  );
}

export default App;
