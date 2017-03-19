import React, { Component } from 'react';
import MyTheme from './MyTheme';
import TodoList from './TodoList';

const todos = ['learning react context', 'blog post'];

class App extends Component {
  render() {
    return (
      <MyTheme color="red">
        <TodoList todos={todos} />
      </MyTheme>
    );
  }
}

export default App;
