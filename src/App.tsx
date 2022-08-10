import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import increment, { incrementAsync, decrement } from './actions';
import Counter from './Counter';
import { RootState } from './store';
import { Register } from './components/register';
import { Login } from './components/login';
import { Routes, Route } from 'react-router-dom';
import { Enter } from './routes/Enter';
import { Question } from './components/Question';
import './styles/style.scss'

export const App :React.FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.count);
  const theme = useSelector((state: RootState) => state.theme);

  const body = document.querySelector('body')

  if (theme === 'light') {
    body.style.backgroundColor = '#9AC2F4';
  } else {
    body.style.backgroundColor = '#100622';
  }

  return (
    <div className={`app`}>
      {/* <header className="app-header">
        <Counter
          value={counter}
          onIncrement={() => dispatch(increment())}
          onDecrement={() => dispatch(decrement())}
          onIncrementAsync={() => dispatch(incrementAsync())}
        />
        asdf
        <ThemeSwitcher />
      </header> */}
      <Routes>
        <Route path="/enter/*" element={<Enter />}>
          <Route index element={<Question />} />
          <Route path="register" element={<Register />}/>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
