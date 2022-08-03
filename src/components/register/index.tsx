import React, { useState } from 'react';
import './style/index.scss';

type UserRegisterInfo = {
  email: string,
  password: string,
  repeatPassword: string,
  rememberMe: boolean,
}

export const Register: React.FC = () => {
  const [ userInfo, setUserInfo ] = useState<UserRegisterInfo>({
    email: '',
    password: '',
    repeatPassword: '',
    rememberMe: false,
  })

  const validation = () => {
    const { email, password, repeatPassword, rememberMe } = userInfo;

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

    if (repeatPassword === password)  {
      alert('Your passwords are not same')
      return;
    }
  }

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
                required
                value={userInfo.password}
              />
            </label>
            <label>
              <p>Confirm Password</p>
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
                required
                value={userInfo.repeatPassword}
              />
            </label>
          </div>
          <div className="register__buttons">
            <label className="register__checkbox">
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
        <div className="register__links">
          <a href="">Есть аккаунт</a>
          <a href="">О нас</a>
        </div>
      </div>
    </div>
  )
};
