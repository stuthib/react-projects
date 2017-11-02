import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';

const AddTodo = (props) => (
  <form onSubmit={
    (event) => {
      event.preventDefault();
      let input = event.target.addTodoItem.value;
      props.dispatch(addTodo(input));
      event.target.addTodoItem.value = '';
    }
  }>
    <input type="text" name="addTodoItem" />
    <button>Submit</button>
  </form>
);

export default connect()(AddTodo);
