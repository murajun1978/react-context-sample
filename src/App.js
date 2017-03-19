import React, { Component } from 'react';
import MyTheme from './MyTheme';
import TodoList from './TodoList';
import TextLabel from './TextLabel';

const todos = ['learning react context', 'blog post'];

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      color: "red"
    }
    this.changeToBlue = this.changeToBlue.bind(this)
  }

  changeToBlue() {
    this.setState({
      color: 'blue'
    })
  }

  render() {
    return (
      <MyTheme color={this.state.color}>
        <button onClick={this.changeToBlue}>
          <TextLabel>Change Blue</TextLabel>
        </button>

        <TodoList todos={todos} />
      </MyTheme>
    );
  }
}

export default App;
