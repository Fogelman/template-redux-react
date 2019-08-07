import { all } from 'redux-saga/effects';
import auth from './auth/sagas';
import todo from './todo/sagas';

export default function* rootSaga() {
  return yield all([auth, todo]);
}
