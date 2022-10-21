import './App.css';
// import { useState } from "react";
import { Formik } from "formik";

function App() {
  // // PART 1 - CONTROLLED COMPONENTS
  // const [nome, setNome] = useState("");
  // const [curso, setCurso] = useState("devops");

  // function submitForm(event) {
  //   event.preventDefault();
  //   setNome(event.target.value);
  //   // console.log(nome);
  // }

  // return (
  //   <form onSubmit={() => submitForm()}>
  //     <h1>{nome} - {curso}</h1>
  //     <input 
  //       value={nome}
  //       type="text" 
  //       placeholder="Nome" 
  //       onChange={(event) => setNome(event.target.value)} 
  //     />

  //     <select 
  //       onChange={(event) => setCurso(event.target.value)}
  //       defaultValue={curso}
  //     >
  //       <option></option>
  //       <option value="front" key="">Front end</option>
  //       <option value="back" key="">Back end</option>
  //       <option value="devops" key="">DevOps</option>
  //     </select>

  //     <input type="submit" />
  //   </form>
  // );

  // PART 2 - UNCONTROLLED COMPONENTS
  // ITEM A - FORMIK Library (https://formik.org/)
  return (
    <Formik 
      // Initial values of form
      initialValues={{ email: "" }} 
      // Submit form function
      onSubmit={(values) => alert(values.email)}
      // Field validator
      validate={(values) => {
        const errors = {};

        // null field
        if (!values.email) {
          errors.email = "Campo obrigatório";
          // check if is valid email
          // Regex Generator (https://regex-generator.olafneumann.org/?sampleText=2020-03-12T13%3A34%3A56.123Z%20INFO%20%20%5Borg.example.Class%5D%3A%20This%20is%20a%20%23simple%20%23logline%20containing%20a%20%27value%27.&flags=i&onlyPatterns=false&matchWholeLine=false&selection=)
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Email inválido"
        }

        return errors;
      }}
    >
      {({ handleSubmit, handleChange, errors }) => (
        <form onSubmit={handleSubmit}>
          {/* Não precisa mais da função onChange */}
          <input type="email" name="email" placeholder="Email" onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
}

export default App;
