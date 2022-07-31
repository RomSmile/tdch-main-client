import * as React from 'react';
import { Login } from './components/login';
import { Register } from './components/register';
import './styles/style.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Register />
      <Login />
    </div>
  );
}

export default App;
