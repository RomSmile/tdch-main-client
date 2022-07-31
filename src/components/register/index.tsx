import React from 'react';
import './style/index.scss';

export const Register: React.FC = () => {
  return (
  <div className="register">
      <div className="register__container">
        <div className="register__header">
          <img src="/images/logo-light.png" alt="logo"/>
          <div><h1>Регистрация</h1></div>
        </div>
        <form action="" className="register__form">
          <div className="register__inputs">
            <label>
              <p>Email:</p>
              <input type="text" />
            </label>
            <label>
              <p>Password:</p>
              <input type="password" />
            </label>
            <label>
              <p>Confirm Password</p>
              <input type="password" />
            </label>
          </div>
          <div className="register__buttons">
            <label className="register__checkbox">
              <label htmlFor="">
                <input style={{ background: 'black'}} type="checkbox" />
              </label>
              <p>Запомнить меня</p>
            </label>
            <button>Войти</button>
          </div>
        </form>
        <div className="register__links">
          <a href="">Есть аккаунт</a>
          <a href="">О нас</a>
        </div>
      </div>
    </div>
  )
};
