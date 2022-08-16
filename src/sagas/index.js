import { all, call } from 'redux-saga/effects';
import userRegistration from './userRegister';

export default function* rootSaga() {
  yield all([
    call(userRegistration),
  ])
}