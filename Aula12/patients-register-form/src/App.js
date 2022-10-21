import "./styles.css";
import { Formik } from "formik";
import InputMask from "react-input-mask";

function scaleIMC(imc) {
  if (imc > 18.5 && imc <= 24.9) {
    return "NORMAL"
  } else if (imc > 24.9 && imc <= 29.9) {
    return "SOBREPESO"
  } else {
    return "OBESIDADE"
  }
}

function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{
          name: "Name", 
          email: "", 
          birthday: "", 
          phone: "", 
          cpf: "", 
          weight: "", 
          height: "", 
        }}
        validate={
          (values) => {
            const errors = {}

            if (!values.name) {
              errors.name = "Required field";
            }
  
            if (!values.email) {
              errors.email = "Required field";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
              errors.email = "Invalid email";
            }
  
            if (!values.birthday) {
              errors.birthday = "Required field";
            }
  
            if (!values.phone) {
              errors.phone = "Required field";
            } else if (
              !/\([0-9]{2}\) (?:9[0-9]{1}|[1-5]{1})[0-9]{3}-[0-9]{4}/.test(values.phone)
              ) {
              errors.phone = "Invalid phone";
            }
  
            if (!values.cpf) {
              errors.cpf = "Required field";
            } else if (!/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(values.cpf)) {
              errors.cpf = "Invalid CPF";
            }
  
            if (!values.weight) {
              errors.weight = "Required field";
            } else if (!/^\d+(?:\.\d+)?$/.test(values.weight)) {
              errors.weight = "Invalid  weight";
            }
  
            if (!values.height) {
              errors.height = "Required field";
            } else if (!/^\d+(?:\.\d+)?$/.test(values.height)) {
              errors.height = "Invalid height";
            }

            return errors
        }}
        onSubmit={() => alert("ok")}
      >
        {({ values, handleSubmit, errors, handleChange, resetForm }) => (
          <form onSubmit={handleSubmit}>
            <div className="header-form">
              <h1>Patients register</h1>

              <div className="container-buttons">
                <button type="submit">Save</button>
                <button onClick={resetForm}>Clear</button>
              </div>
            </div>
            
            <label>
              <span>Name</span>
              <input 
                autoComplete="off"
                type="text" 
                name="name" 
                value={values.name} 
                onChange={handleChange} />
              <span>{errors.name}</span>
            </label>
            
            <label>
              <span>Email</span>
              <input 
                autoComplete="off"
                type="email" 
                name="email" 
                value={values.email} 
                onChange={handleChange} 
              />
              <span>{errors.email}</span>
            </label>
            
            <label>
              <span>Birthday</span>
              <input 
                autoComplete="off"
                type="date" 
                name="birthday" 
                value={values.birthday} 
                onChange={handleChange} 
              />
              <span>{errors.birthday}</span>
            </label>
            
            <label>
              <span>Phone</span>
              {/* <input 
                autoComplete="off"
                type="tel" 
                name="phone" 
                value={values.phone} 
                onChange={handleChange} 
              /> */}
              <InputMask
                autoComplete="off"
                mask="(99) 99999-9999" 
                name="phone" 
                value={values.phone} 
                onChange={handleChange} 
              />
              <span>{errors.phone}</span>
            </label>
            
            <label>
              <span>CPF</span>
              {/* <input 
                autoComplete="off"
                type="text" 
                name="cpf" 
                value={values.cpf} 
                onChange={handleChange} 
              /> */}
              <InputMask
                autoComplete="off"
                mask="999.999.999-99" 
                name="cpf" 
                value={values.cpf} 
                onChange={handleChange} 
              />
              <span>{errors.cpf}</span>
            </label>
            
            <label>
              <span>Weight (kg)</span>
              <input 
                autoComplete="off"
                type="text" 
                name="weight" 
                value={values.weight} 
                onChange={handleChange} />
              <span>{errors.weight}</span>
            </label>
            
            <label>
              <span>Height (meters)</span>
              <input 
                autoComplete="off"
                type="text" 
                name="height" 
                value={values.height} 
                onChange={handleChange} />
              <span>{errors.height}</span>
            </label>
            
            { (values.weight && values.height) && (
              <>
                <h1>
                  IMC = {" "} 
                  {(values.weight/Math.pow(values.height, 2)).toFixed(2)}
                </h1>

                <h3>{console.log(scaleIMC(values.weight/Math.pow(values.height, 2)))}</h3>
              </>
            )}
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
