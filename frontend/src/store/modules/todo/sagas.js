import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import {
  todoCreateSuccess,
  todoUpdateSucess,
  todoDeleteSuccess,
  todoListSucess
} from './actions';

export function* create({ payload }) {
  try {
    const { value, user } = payload;

    const response = yield call(api.post, `users/${user}/todo`, {
      value
    });

    const todo = response.data;

    yield put(todoCreateSuccess(todo));
  } catch (err) {
    toast.error('Falha na criação');
  }
}

export function* remove({ payload }) {
  try {
    const { id, user } = payload;

    yield call(api.delete, `users/${user}/todo/${id}`);

    yield put(todoDeleteSuccess(id));
  } catch (err) {
    toast.error('Falha no delete');
  }
}
export function* list({ payload }) {
  try {
    const { user } = payload;

    const response = yield call(api.get, `users/${user}/todo/`);
    const todos = response.data;

    yield put(todoListSucess(todos));
  } catch (err) {
    toast.error('Falha na listagem');
  }
}

export function* update({ payload }) {
  try {
    const { id, value, user } = payload;

    const response = yield call(api.put, `users/${user}/todo/${id}`, {
      value
    });
    const todo = response.data;
    console.tron.log(todo);
    yield put(todoUpdateSucess(todo));
  } catch (err) {
    toast.error('Falha no update');
  }
}

export default all([
  takeLatest('@todo/CREATE_TODO', create),
  takeLatest('@todo/DELETE_TODO', remove),
  takeLatest('@todo/LIST_TODO', list),
  takeLatest('@todo/UPDATE_TODO', update)
]);
