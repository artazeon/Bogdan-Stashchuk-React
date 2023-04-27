import './App.css';
import Petinfo from './components/Petinfo';

function App() {
  return (
    <div className="App">
      <Petinfo animal="dog" age={4}/>
      <Petinfo animal="cat" age={7}/>
    </div>
  );
}

export default App;
