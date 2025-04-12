import { Navigate } from "react-router-dom";
function RutaProtegida({ proteger }) {
    let token = localStorage.getItem("token")
    /* Operador ternario */


    if (token) {
        return proteger
    } else {
        return <Navigate to="/" />
    }


}
export default RutaProtegida;
