import React, { PureComponent } from 'react';
import TextLabel from './TextLabel';

class TodoList extends PureComponent {
  render() {
    const { todos } = this.props
    return (
      <ul>
        {todos.map(todo => <li key={ todo }><TextLabel>{ todo }</TextLabel></li>)}
      </ul>
    );
  }
}

export default TodoList;
