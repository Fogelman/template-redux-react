import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import todo from './../../assets/todo.svg';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória')
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function onSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <>
      <img alt="todo logo" src={todo} />
      <Form schema={schema} onSubmit={onSubmit}>
        <Input name="email" type="text" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />
        <button type="submit">{loading ? 'Carregando ...' : 'Acessar'}</button>
      </Form>
      <Link to="/register">Criar conta gratuita</Link>
    </>
  );
}
