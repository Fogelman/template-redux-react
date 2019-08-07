import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import todo from './../../assets/todo.svg';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória')
});

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function onSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img alt="todo logo" src={todo} />
      <Form schema={schema} onSubmit={onSubmit}>
        <Input name="name" type="text" placeholder="Nome Completo" />
        <Input name="email" type="text" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />
        <button type="submit">{loading ? 'Carregando ...' : 'Acessar'}</button>
      </Form>
      <Link to="/">Já possuo conta</Link>
    </>
  );
}
