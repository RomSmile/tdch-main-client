import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
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

  const theme = useSelector((state: RootState) => state.theme)

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
  <div className={`register register--${theme}`}>
      <div className="register__container">
        <div className="register__header">
          <div><h1>Регистрация</h1></div>
        </div>
        <form action="" className="register__form">
          <div className={`register__inputs register__inputs--${theme}`}>
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
          <div className={`register__buttons register__buttons--${theme}`}>
            <label className={`register__checkbox register__checkbox--${theme}`}>
            <label htmlFor="">
                {userInfo.rememberMe && (<img src={`/images/galochka-${theme}.png`} />)}
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
        <div className={`register__links register__links--${theme}`}>
          <a href="">Есть аккаунт</a>
          <a href="">О нас</a>
        </div>
      </div>
    </div>
  )
};
