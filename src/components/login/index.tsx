import React, { useState } from 'react';
import './style/index.scss';

export const Login: React.FC = () => {
  const [ rememberMe, setRememberMe ] = useState<boolean>(false);

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__header">
          <img src="/images/logo-light.png" alt="logo"/>
          <div><h1>Логин</h1></div>
        </div>
        <form action="" className="login__form">
          <div className="login__inputs">
            <label>
              <p>Email:</p>
              <input type="text" placeholder="Введите вашу почту..." />
            </label>
            <label>
              <p>Password:</p>
              <input type="password" placeholder="Введите ваш пароль..." />
            </label>
          </div>
          <div className="login__buttons">
            <label className="login__checkbox">
              <label htmlFor="">
                {rememberMe && (<img src='/images/galochka.png' />)}
                <input
                  type="checkbox"
                  onClick={() => setRememberMe(!rememberMe)}
                />
              </label>
              <p>Запомнить меня</p>
            </label>
            <button>Войти</button>
          </div>
        </form>
        <div className="login__links">
          <a href="">Регистрация</a>
          <a href="">О нас</a>
        </div>
      </div>
    </div>
  )
};
