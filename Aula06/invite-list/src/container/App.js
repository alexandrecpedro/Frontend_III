import ClassComponent from '../components/ClassComponent';
import FunctionComponent from '../components/FunctionComponent';
import { people } from '../data'

export default function App() {
  return (
    <div className="App">
      <h3>Convidados:</h3>
      {
        people.map(({person}) => (
          <ClassComponent key={person.id.toString()} nome={person.nome} estaNaLista={person.estaNaLista} />
        ))
      }
      <h3>Tarefa: </h3>
      {
        people.map((person) => (
          <FunctionComponent key={person.id} nome={person.nome} tarefa={person.tarefa} />
        ))
      }
    </div>
  );
}
