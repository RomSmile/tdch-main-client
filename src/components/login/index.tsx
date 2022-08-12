import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
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

  const theme = useSelector((state: RootState) => state.theme);


  const submit = () => {

  }

  return (
    <div className={`login--${theme} login`}>
      <div className="login__container">
        <div className="login__header">
          <div><h1>Логин</h1></div>
        </div>
        <form action="" className="login__form">
          <div className={`login__inputs--${theme} login__inputs`}>
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
          <div className={`login__buttons--${theme} login__buttons`}>
            <label className={`login__checkbox login__checkbox--${theme}`}>
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
        <div className={`login__links login__links--${theme}`}>
          <Link to="/enter/register">Регистрация</Link>
          <a href="">О нас</a>
        </div>
      </div>
    </div>
  )
};
