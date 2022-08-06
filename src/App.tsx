import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import increment, { incrementAsync, decrement } from './actions';
import Counter from './Counter';
import { RootState } from './store';
import { Register } from './components/register';
import { Login } from './components/login';
import { ThemeSwitcher } from './components/ThemeSwithcer';

export const App :React.FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.count);

  return (
    <div className="App">
      <header className="App-header">
        <Counter
          value={counter}
          onIncrement={() => dispatch(increment())}
          onDecrement={() => dispatch(decrement())}
          onIncrementAsync={() => dispatch(incrementAsync())}
        />
        <Login />
        <Register />
        <ThemeSwitcher />
      </header>
    </div>
  );
}

export default App;
