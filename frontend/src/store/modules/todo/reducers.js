import produce from 'immer';
const INITIAL_STATE = {
  todos: []
};
export default function todo(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@todo/CREATE_TODO_SUCCESS': {
        draft.todos = [action.payload.todo, ...state.todos];
        break;
      }
      case '@todo/UPDATE_TODO_SUCCESS': {
        draft.todos = state.todos.map(todo => {
          if (todo._id === action.payload.todo._id) {
            todo.value = action.payload.todo.value;
          }

          return todo;
        });

        // draft.todos = state.todos.map((todo, index) => {
        //   if (index === action.index) {
        //     return Object.assign({}, todo, {
        //       completed: !todo.completed
        //     })
        //   }
        // }
        break;
      }
      case '@todo/DELETE_TODO_SUCCESS': {
        draft.todos = state.todos.filter(
          todo => todo._id !== action.payload.id
        );

        break;
      }
      case '@todo/LIST_TODO_SUCCESS': {
        draft.todos = action.payload.todos;
        break;
      }
      default:
    }
  });
}
