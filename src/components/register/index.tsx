import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { submit } from '../../actions/userRegistration';
import { bindActionCreators } from 'redux';
import { Error } from './Error';
import './style/index.scss';


type Props = {
  theme: 'light' | 'dark',
  submit: (info: UserRegisterInfo) => void
};
type UserRegisterInfo = {
  email: string,
  password: string,
  confirmPassword: string,
};
type RegisterError = 'login' | 'password' | 'confirmPassword' | '';

const mapStateToProps = ({ theme }) => ({
  theme
});
const mapDispatchToProps = dispatch => bindActionCreators({
  submit
}, dispatch)

const Register: React.FC<Props> = (props) => {
  const { theme, submit } = props;
  const [ registerError, setRegisterError ] = useState<RegisterError>('');
  const [ textError, setTextError ] = useState<string>('');
  const [ userInfo, setUserInfo ] = useState<UserRegisterInfo>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const clear = () => {
    setRegisterError('');
    setTextError('');
  }

  const validation = () => {
    const { email, password, confirmPassword } = userInfo;
    console.log(userInfo)


    if (email.length < 2 || email.length > 50) {
      setTextError('Your email length is not valid');
      setRegisterError('login');
      return;
    }

    if (!email.includes('@')) {
      setTextError('Your email is not valid');
      setRegisterError('login');
      return;
    }

    if (password.length < 8 || password.length > 20) {
      setTextError('Your password length is not valid');
      setRegisterError('password');
      return;
    }

    if (!password.match(/[A-Z]/g)) {
      console.log('uppercase')
      setTextError('Your password must includes one symbol in uppercase');
      setRegisterError('password');
      return;
    }

    if (!password.match(/[&?!-_$#]/g)) {
      console.log('special')
      setTextError('your password must includes this special symbols');
      setRegisterError('password');
      return;
    }

    if (confirmPassword !== password)  {
      console.log('asdfasdf')
      setTextError('Your passwords are not same');
      setRegisterError('confirmPassword')
      return;
    }

    submit(userInfo);
  }

  return (
  <div className={`register register--${theme}`}>
      <div className="register__container">
        <div className="register__header">
          <div><h1>Регистрация</h1></div>
        </div>
        <form
          action=""
          method="post"
          className="register__form"
          onSubmit={(ev) => {
            ev.preventDefault();
            validation()
          }}
        >
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
                style={registerError === 'login' ? { border: '1px solid red' } : {}}
                value={userInfo.email}
                required
              />
              {registerError === 'login' && (<Error textError={textError} />)}
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
                style={registerError === 'password' ? { border: '1px solid red' } : {}}
                required
                value={userInfo.password}
              />
              {registerError === 'password' ? (<Error textError={textError} />) : ''}
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
                    confirmPassword: event.target.value
                  })
                }}
                style={registerError === 'confirmPassword' ? { border: '1px solid red' } : {}}
                required
                value={userInfo.confirmPassword}
              />
              {registerError === 'confirmPassword' && (<Error textError={textError} />)}
            </label>
          </div>
          <div className={`register__buttons register__buttons--${theme}`}>
            <button onClick={clear}>Войти</button>
          </div>
        </form>
        <div className={`register__links register__links--${theme}`}>
          <Link to="/enter/login">Есть аккаунт</Link>
          <a href="https:google.com">О нас</a>
        </div>
      </div>
    </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
