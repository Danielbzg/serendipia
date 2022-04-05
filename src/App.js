import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

const App = () => {
  
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer />        
        
      </header>
    </div>
  );
}

export default App;
