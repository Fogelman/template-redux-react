import React, { useState } from 'react';
import { todoDelete, todoUpdate } from '~/store/modules/todo/actions';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Text } from './styles';

export default function ToDoList({ todo }) {
  const textRef = React.createRef();
  const [value, setValue] = useState(todo.value);
  const [row, setRow] = useState(10);
  const dispatch = useDispatch();
  function handleDelete(e) {
    dispatch(todoDelete(todo._id, todo.user));
  }

  function handleChange(e) {
    // const previousRow = e.target.row;

    // setRow(~~(e.target.scrollHeight / 20));
    if (e.scrollHeight > e.clientHeight) {
      e.style.height = e.scrollHeight + 'px';
    }
    setValue(e.target.value);
  }
  function handleUpdate(e) {
    dispatch(todoUpdate(todo._id, value, todo.user));
  }

  return (
    <Container>
      {/* <input value={value} type="text" onChange={handleChange} /> */}

      {/* <textarea rows="4" cols="50" wrap="hard">
        At w3schools.com you will learn how to make a website. We offer free
        tutorials in all web development technologies.
      </textarea> */}

      <Text onChange={handleChange} value={value} />
      <div>
        <button onClick={handleDelete}>Deletar</button>
        {value !== todo.value && <button onClick={handleUpdate}>Salvar</button>}
      </div>
    </Container>
  );
}
