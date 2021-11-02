// import AltaContacto from './AltaContactos';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/header/Header.js";

function App() {

  
  return (
    
     <>
     <div className="App">
     <Router>
       <Header/>
       
       <Switch>
       </Switch>
      
      </Router>
      </div>
     </>
   
  );
}

export default App;
