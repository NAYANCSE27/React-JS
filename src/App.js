import Input from './input/Input';
import './App.css';

function App() {
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];

  return (
    <div className="App">
      <Input posts = {posts}/>
    </div>
  );
}

export default App;
