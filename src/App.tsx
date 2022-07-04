import { useState } from 'react';
import logo from './assets/logos/logo.svg';
import './styles/App.css';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App bg-gray-300 text-primary">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            <Button>Count</Button> is: {count}
          </button>
        </p>
        <p>
          <a className="text-gray-500 hover:underline" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a
            className="text-gray-500 hover:underline"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
