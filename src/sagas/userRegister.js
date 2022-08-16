/* eslint-disable require-yield */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */
import { takeEvery, call } from "redux-saga/effects";
import { USER_REGISTRATION } from '../actions/userRegistration';



const hz = async(url, method, data, token ) => {
  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-type": 'application/json',
    }
  })

  return response
}

function* Register({ userInfo }){
  const { email, password, confirmPassword } = userInfo;
  console.log('saga')
  console.log(userInfo)
  const url = 'https://tdch-main-api.herokuapp.com/api/v1/auth/register';

  const data = yield call(hz, url, 'post', { email, password, confirmPassword }, url);

  console.log(data.status)


  
}


export default function* userRegistration() {
  yield takeEvery(USER_REGISTRATION.REGISTER, Register);
}