export function todoCreate(user, value) {
  return {
    type: '@todo/CREATE_TODO',
    payload: {
      value,
      user
    }
  };
}
export function todoCreateSuccess(todo) {
  return {
    type: '@todo/CREATE_TODO_SUCCESS',
    payload: {
      todo
    }
  };
}

export function todoUpdate(id, value, user) {
  return {
    type: '@todo/UPDATE_TODO',
    payload: {
      id,
      value,
      user
    }
  };
}
export function todoUpdateSucess(todo) {
  return {
    type: '@todo/UPDATE_TODO_SUCCESS',
    payload: {
      todo
    }
  };
}

export function todoDelete(id, user) {
  return {
    type: '@todo/DELETE_TODO',
    payload: {
      id,
      user
    }
  };
}
export function todoDeleteSuccess(id) {
  return {
    type: '@todo/DELETE_TODO_SUCCESS',
    payload: {
      id
    }
  };
}

export function todoList(user) {
  return {
    type: '@todo/LIST_TODO',
    payload: {
      user
    }
  };
}
export function todoListSucess(todos) {
  return {
    type: '@todo/LIST_TODO_SUCCESS',
    payload: {
      todos
    }
  };
}
