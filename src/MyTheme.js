import React, { Component, PropTypes } from 'react';

class MyTheme extends Component {
  static childContextTypes = {
    color: PropTypes.string
  }

  getChildContext() {
    return {
      color: this.props.color
    }
  }

  render() {
    const { children } = this.props

    return (
      <div>{ children }</div>
    );
  }
}

export default MyTheme;
