// Render Prop
import { Formik } from "formik";
// import { ReactJsAlert } from "reactjs-alert";
import swal from "@sweetalert/with-react";


function App() {
  return (
    <Formik
      //valores iniciais do form
      initialValues={{ name: "", phone: "", email: "" }}
      //função de submissao do formulario
      onSubmit={(values) => 
        swal({
          title: "Successful data send!",
          content: <div>
              <p>Nome: {values.nome}</p>
              <p>Telefone: {values.telefone}</p>
              <p>Email: {values.email}</p>
            </div>,
          icon: "success",
          button: "Remake"
        })
      }
      //validar campos
      validate={(values) => {
        const errors = {};

        if (!values.name) {
          errors.name = "Required Field!";
        }

        if (!values.phone) {
          errors.phone = "Required Field!";
        } else if (
          !/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/.test(values.phone)
        ) {
          errors.email = "Invalid phone address";
        }

        if (!values.email) {
          errors.email = "Required Field!";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        return errors;
      }}
    >
      {({ handleSubmit, handleChange, errors }) => (
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input 
            name="name" 
            placeholder="Enter your name" 
            onChange={handleChange} 
          />
          {errors.name && <span>{errors.name}</span>}
          <br />
          <label>Phone</label>
          <input 
            name="phone" 
            placeholder="(DD) XXXXX-XXXX" 
            onChange={handleChange} 
          />
          {errors.phone && <span>{errors.phone}</span>}
          <input 
            name="email" 
            placeholder="Enter your email" 
            onChange={handleChange} 
          />
          {errors.email && <span>{errors.email}</span>}
          <br />
          <button type="submit">Sumit</button>
        </form>
      )}
    </Formik>
  );
}

export default App;
