import React, { useState } from 'react';
import './style/index.scss';

type UserLoginInfo = {
  email: string,
  password: string,
  rememberMe: boolean,
}

export const Login: React.FC = () => {
  const [ userInfo, setUserInfo ] = useState<UserLoginInfo>({
    email: '',
    password: '',
    rememberMe: false,
  })


  const validation = () => {
    const { email, password, rememberMe } = userInfo;

    if (email.length < 2 || email.length > 50) {
      // i'll add modal block with error
      alert('Your email length is not valid');
      return
    }

    if (password.length < 8 || password.length > 20) {
      alert('Your password length is not valid');
      return
    }

    if (password.match(/[A-Z]/g)) {
      alert('Your password must includes one symbol in uppercase')
      return
    }

    if (password.match(/&?!-_$#*()/g)) {
      alert('your password must includes this symbols')
      return
    }
  }

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
              <input
                type="text"
                name="email"
                placeholder="Введите вашу почту..."
                onChange={(event) => {
                  setUserInfo({
                    ...userInfo,
                    email: event.target.value
                  })
                }}
                value={userInfo.email}
                required
              />
            </label>
            <label>
              <p>Password:</p>
              <input
                type="password"
                name="password"
                placeholder="Введите ваш пароль..."
                onChange={(event) => {
                  setUserInfo({
                    ...userInfo,
                    password: event.target.value
                  })
                }}
                value={userInfo.password}
                required
              />
            </label>
          </div>
          <div className="login__buttons">
            <label className="login__checkbox">
              <label htmlFor="">
                {userInfo.rememberMe && (<img src='/images/galochka.png' />)}
                <input
                  type="checkbox"
                  onClick={() => 
                    setUserInfo({
                      ...userInfo,
                      rememberMe: !userInfo.rememberMe
                    })
                  }
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
