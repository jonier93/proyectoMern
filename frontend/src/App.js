import './App.css';
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
