import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function Header(props) {
      
      return (
        <>
        <div className="App">
        <Link to="/AltaUsuario"><button>Alta Usuario</button></Link>
        <Link to="/loggin"><button>Iniciar Sesión</button></Link>
       
        </div>    
        </>
      );
    

}
  export default Header;