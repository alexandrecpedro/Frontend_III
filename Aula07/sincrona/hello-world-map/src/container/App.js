import { data } from '../data'
import '../styles/App.css';

export default function App() {
  return (
    <div>
      {
        data.map((word) => (
          <h1 key={word.id.toString()}>
            {word.string}
          </h1>
        ))
      }
    </div>
  );

}
