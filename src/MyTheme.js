import React, { Component, PropTypes } from 'react';
import Theme from './Theme'

class MyTheme extends Component {
  constructor(props, context) {
    super(props, context)
    this.theme = new Theme(this.props.color)
  }

  static childContextTypes = {
    theme: PropTypes.object
  }

  getChildContext() {
    return {
      theme: this.theme
    }
  }

  componentWillReceiveProps(next) {
    this.theme.setColor(next.color)
  }

  render() {
    const { children } = this.props

    return (
      <div>{ children }</div>
    );
  }
}

export default MyTheme;
