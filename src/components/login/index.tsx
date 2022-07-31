import React from 'react';
import './style/index.scss';

export const Login: React.FC = () => {
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
              <input type="text" />
            </label>
            <label>
              <p>Password:</p>
              <input type="password" />
            </label>
          </div>
          <div className="login__buttons">
            <label className="login__checkbox">
              <label htmlFor="">
                <input style={{ background: 'black'}} type="checkbox" />
              </label>
              <p>Запомнить меня</p>
            </label>
            <button>Войти</button>
          </div>
        </form>
        <div className="login__links">
          <a href="">Нету аккаунта</a>
          <a href="">О нас</a>
        </div>
      </div>
    </div>
  )
};
