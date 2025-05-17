import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { alertaRedireccion } from '../helpers/funciones'
import { alertaError } from '../helpers/funciones'
import { generarToken } from '../helpers/funciones'
function Login() {

  const [getUsuario, setUsuario] = useState("")
  const [getPassword, setPassword] = useState("")
  let redireccion = useNavigate()
  const [getRol, setRol] = useState("")

  console.log(generarToken())

  function iniciarSesion() {
    if (getUsuario === "teacher" && getPassword === "teacher") {
      let token = generarToken();
      localStorage.setItem("token", token);
      localStorage.setItem("usuario", getUsuario);
      localStorage.setItem("rol", "Teacher"); // Guardar el rol
      alertaRedireccion("Bienvenido, Teacher", "/home", redireccion);
    } else if (getUsuario === "student" && getPassword === "student") {
      let token = generarToken();
      localStorage.setItem("token", token);
      localStorage.setItem("usuario", getUsuario);
      localStorage.setItem("rol", "Student"); // Guardar el rol
      alertaRedireccion("Bienvenido, Student", "/student", redireccion); // Redirigir a /student
    }  else if (getUsuario === "admin" && getPassword === "admin") {
      let token = generarToken();
      localStorage.setItem("token", token);
      localStorage.setItem("usuario", getUsuario);
      localStorage.setItem("rol", "admin"); // Guardar el rol
      alertaRedireccion("Bienvenido, admin", "/home", redireccion); // Redirigir a /student
    } else {
      alertaError("Error", "Usuario o contraseña incorrectos", "error");
    }
  }

  return (
    <div className="container">
      <input id="signup_toggle" type="checkbox" />
      <form className="form">
        <div className="form_front">
          <div className="form_details">Login</div>
          <input onChange={(e) => setUsuario(e.target.value)} type="text" className="input" placeholder="Username" />
          <input onChange={(e) => setPassword(e.target.value)} type="password" className="input" placeholder="Password" />
          <button type='button' onClick={iniciarSesion} className="btn">Login</button>
          <span className="switch">Don't have an account?
            <label for="signup_toggle" className="signup_tog">
              Sign Up
            </label>
          </span>
        </div>
        <div className="form_back">
          <div className="form_details">SignUp</div>
          <input type="text" className="input" placeholder="Full Name" />
          <input type="email" className="input" placeholder="Email" />
          <select
            className="input"
            value={getRol}
            onChange={(e) => setRol(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
            {/* Puedes agregar más roles aquí si es necesario */}
          </select>
          <input type="password" className="input" placeholder="Password" />
          <input type="password" className="input" placeholder="Confirm Password" />
          <button className="btn">Signup</button>
          <span className="switch">Already have an account?
            <label for="signup_toggle" className="signup_tog">
              Sign In
            </label>
          </span>
        </div>
      </form>
    </div>
  )
}

export default Login