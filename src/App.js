// import AltaContacto from './AltaContactos';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/header/Header";
import AltaUsuario from "./components/loggin/altaUsuario";
import Loggin from "./components/loggin/Loggin";


function App() {

  
  return (
    
     <>
     <div className="App">
     <Router>
       <Header/>
      <Switch>
       <Route  path="/AltaUsuario">
        <AltaUsuario/>
       </Route>
       <Route path="/Loggin">
        <Loggin/>
       </Route>
      </Switch>
      
      </Router>
      </div>
     </>
   
  );
}

export default App;
