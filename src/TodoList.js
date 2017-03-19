import React from 'react';
import TextLabel from './TextLabel';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => <li key={ todo }><TextLabel>{ todo }</TextLabel></li>)}
    </ul>
  );
}

export default TodoList;
