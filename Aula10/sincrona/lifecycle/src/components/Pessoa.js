// import { Component } from "react";

import { useEffect, useState } from "react";

// export default class Pessoa extends Component {
//   constructor(props) {
//     super(props);
//     console.log("Construtor");

//     this.state = {
//       name: "Wesley"
//     };
//   }

//   componentDidMount() {
//     console.log("DidMount");
//   }

//   componentDidUpdate() {
//     console.log("Algum estado atualizado");
//   }

//   componentDidUnmount() {
//     console.log("Componente sumiu");
//   }

//   render() {
//     return (
//       <div>
//         {console.log("Render")}
//         <h1>Pessoa</h1>
//         <button onClick={() => this.setState({ name: "Bruno" })}>
//           Apertar
//         </button>
//       </div>
//     );
//   }
// }

export default function Pessoa() {
  const [nome, setNome] = useState("Wesley");
  const [idade, setIdade] = useState(30);
  const [loading, setLoading] = useState(true);

  // useEffect
  useEffect(() => {
    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);
    // console.log("Hello useEffect");
    console.log("Executei");

    return () => {
      console.log("Componente desmontado");
    };
  }, [nome, idade, loading]);

  return (
    <div>
      {loading ? (
        <h1 onClick={() => setNome("Bruno")}>Carregando...</h1>
      ) : (
        <h1>Dados do servidor</h1>
      )}
      <h1 onClick={() => setIdade(31)}>{idade}</h1>
    </div>
  );
}
