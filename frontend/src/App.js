import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { BarraNav } from './componentes/barraNav';

function App() {
  
  return (
    <div className="App">
      <BarraNav />            
    </div>
  );
}

export default App;

/* 
function enviarDatos(){
    fetch('http://localhost:5000/consultar')
    .then(resp => resp.text())
    .then(data => console.log(data))
  }
  return (
    <div className="App">
      <button type="button" onClick={enviarDatos}> enviar </button>      
    </div>
  );
  */
