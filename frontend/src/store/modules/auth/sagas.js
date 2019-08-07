import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import {
  signInSuccess,
  signFailure,
  signOut as signOutAction
} from './actions';

import history from '~/services/history';

export function* singIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'users/auth', {
      email,
      password
    });

    const { token, user } = response.data;

    api.defaults.headers['Authorization'] = `Bearer ${token}`;
    yield put(signInSuccess(token, user));
    history.push('/todo');
  } catch (err) {
    toast.error('Falha na autenticação, verifique os seus dados');
    yield put(signFailure());
  }
}

export function* singUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true
    });

    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados!');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }
}

export function singOut() {
  history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', singIn),
  takeLatest('@auth/SIGN_UP_REQUEST', singUp),
  takeLatest('@auth/SIGN_OUT', singOut),
  takeLatest('persist/REHYDRATE', setToken)
]);
