import { useState, useEffect } from "react";
// import axios from "axios";
// import { addDataUser } from "../features/userSlice";
import {  useDispatch } from "react-redux";
// import servicioPost from "../services/user";



function AltaUsuario(props) {
  const dispatch = useDispatch(); 
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
 

  

//   const enviarDatos = () => {
//     const data = {
//       nombre: nombre,
//       password: password, 
//       email: email,    
//     };
//     postData(data);
//   };

//   async function postData(payload = {}) {
//     dispatch(addDataUser(payload))

// //     function addUser(payload)
//   }


  return (
    <div className="App">
    
      <input
        type="text"
        value={nombre}
        placeholder="Nombre"
        name="nombre"
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        value={password}
        placeholder="Introducir contraseña"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
    
      <input
        type="text"
        value={email}
        placeholder="Email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
     
      {/* <button onClick={enviarDatos}>Enviar</button> */}
    </div>
  );
}

export default AltaUsuario;
