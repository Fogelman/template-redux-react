import React, { useState } from 'react';

// import { Container } from './styles';

export default function ToDoBar() {
  const [value, setValue] = useState();
  function handleChange(e) {
    e.persist();
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    setValue('');
    // dispatch(todoCreate(id, value));
  }

  return (
    <>
      <input
        type="text"
        placeholder="Insira um todo"
        name="todo"
        value={value}
        onChange={handleChange}
      />

      <button>ENVIAR</button>
    </>
  );
}
