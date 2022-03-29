import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <h1>Serendipia</h1>
        <div className="orgBase">
          <img src={logo} className="App-logo" alt="logo" />
          <button>Boton</button>
        </div>
        
      </header>
    </div>
  );
}

export default App;
