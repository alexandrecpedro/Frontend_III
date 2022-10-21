import '../styles/App.css';

import { useState } from 'react';

import Button from '../components/Button';
import Item from '../components/Item';
import tasksTemp from '../data';

function App() {
  // USESTATE (useState)
  // Sempre que precisarmos alterar um valor mostrado em tela, precisaremos de um state
  const [inputText, setInputText] = useState('');

  const [tasks, setTasks] = useState(tasksTemp);

  function addItem() {
    const newTask = {
      id: tasks.length,
      name: inputText,
      status: false
    };
    setTasks([...tasks, newTask]);
    setInputText('');
  }
  
  function deleteItem(id) {
    const temp = tasks.filter((item) => item.id !== id);
    setTasks(temp);
  }

  function handleInputText(event) {
    setInputText(event.target.value);
  }

  return (
    <>
      <header className='header'>
        <input 
          className='input' 
          type='text' 
          value={inputText}
          onChange={(event) => handleInputText(event)} 
        />
        <div className='container_button'>
          <Button text='Add' onClick={addItem} />
          <Button text='Clear'/>
        </div>
      </header>
      {/* {console.log(tasksTemp)} */}
      <main>
        { tasks.length > 0 ? (
          tasks.map(task => (
            <Item 
              key={task.id} 
              id={task.id}
              name={task.name} 
              status={task.status} 
              deleteTask={deleteItem} />
            ))
          ) : (
            <span>Nenhuma tarefa adicionada</span>
          )
        }
      </main>
    </>
  );
}

export default App;
