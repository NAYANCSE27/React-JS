import Input from './input/Input';
import './App.css';

function App() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      <Input numbers = {numbers}/>
    </div>
  );
}

export default App;
