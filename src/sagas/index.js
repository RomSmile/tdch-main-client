import { all, call } from 'redux-saga/effects';
import { watchIncrementAsync } from './incrementAsync';

export default function* rootSaga() {
  yield all([
    call(watchIncrementAsync),
  ])
}