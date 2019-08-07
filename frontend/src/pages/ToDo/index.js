import React, { useState, useEffect } from 'react';
import ToDoCard from './components/ToDoCard';
import { Container, Button } from './styles';
import { todoList } from '~/store/modules/todo/actions';
import { signOut } from '~/store/modules/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import NewPost from './test';
export default function ToDo() {
  const todos = useSelector(state => state.todo.todos);
  const id = useSelector(state => state.auth.user._id);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(todoList(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <>
      <Container>
        <Button onClick={handleSignOut}>Deslogar</Button>
        <NewPost />
        {todos.map(todo => (
          <ToDoCard key={todo._id} todo={todo} />
        ))}
      </Container>
    </>
  );
}
