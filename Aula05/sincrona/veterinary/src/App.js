import Cachorro from "./components/Cachorro";
import { animais } from './data';

export default function App() {
  return (
    <div>
      <h1>Clientes caninos da veterinária</h1>

      {
        animais.map((animal) => (
          <Cachorro key={animal.id.toString()} item={animal}
            // nome={animal.nome} 
            // idade={animal.idade} 
            // sexo={animal.sexo} 
            // tamanho={animal.tamanho} 
          />
        ))
      }
    </div>
  );
}
