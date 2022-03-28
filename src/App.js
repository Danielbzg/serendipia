import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Serendipia</h1>
        <button>Boton</button>
      </header>
    </div>
  );
}

export default App;
