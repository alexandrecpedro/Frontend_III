import "./App.css";
import api from "api";
import { useEffect, useState } from "react";

function App() {

  const [toDos, setToDos] = useState([]);
  // const dataString = {
  //   status: false,
  //   title: "Estudar2222",
  //   description: "Estudar HTML",
  //   date: new Date(),
  // };

  async function getToDos() {
    // FETCH
    // const data = await fetch('https://api-todo-dh.herokuapp.com/todo');
    // const responseJSON = await data.json();
    // console.log(responseJSON);

    // AXIOS
    // const { data } = await axios.get("todo", {
    //   headers: {
    //     Authorization: "Bearer asdqweqq30198230q9w8e",
    //   },
    // });

    const { data } = await api.get("/todo");
    console.log(data);
    setToDos(data)
  }

  // async function saveToDos() {
    // FETCH
    // const data = await fetch("https://api-todo-dh.herokuapp.com/todo", {
    //   method: "POST",
    //   body: {
    //     status: "false",
    //     title: "To Study",
    //     description: "Study HTML",
    //     date: "2021-03-29T00:00:00.000Z"
    //   },
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    
    // AXIOS
    // axios.post("https://api-todo-dh.herokuapp.com/todo", {
    //   status: false,
    //   title: "Estudar2222",
    //   description: "Estudar HTML",
    //   date: new Date(),
    // });

  useEffect(() => {
    getToDos();
  }, []);

  return (
    <div>

      <button onClick={{}}>Search all</button>
      {/* <form>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Description" />
        Status <input type="checkbox" />
        <input type="date" />
      </form> */}
      {
        toDos.map((toDo) => 
          <li>{toDo.title}</li>
        )
      }
    </div>
  );
}

export default App;