const ADD_TODO = 'ADD_TODO';
export const addTodo = (text) => ({
  type: ADD_TODO,
  text
});

const DELETE_TODO = 'DELETE_TODO';
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id
});

const WRITE_NOTE = 'WRITE_NOTE';
export const writeNote = (text) => ({
  type: WRITE_NOTE,
  text
});
