import Button from '../components/Button';
import '../styles/App.css';

function App() {
  // USESTATE (useState)
  // Sempre que precisarmos alterar um valor mostrado em tela, precisaremos de um state
  return (
    <>
      <header className='header'>
        <input className='input' type='text' />

        <div className='container_button'>
          <Button text='Add' />
          <Button text='Clear'/>
        </div>
        
      </header>
    </>
  );
}

export default App;
