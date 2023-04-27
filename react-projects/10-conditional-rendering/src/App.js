import './App.css';
import Petinfo from './components/Petinfo';

function App() {
  return (
    <div className="App">
      <Petinfo animal="dog" age={4} hasPet={true} />
      <Petinfo animal="cat" age={7} hasPet={false} />
    </div>
  );
}

export default App;
