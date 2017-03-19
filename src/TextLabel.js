import React, { Component, PropTypes } from 'react';

class TextLabel extends Component {
  componentDidMount() {
    this.context.theme.subscribe(() => this.forceUpdate());
  }

  render() {
    return (
      <div style={{ color: this.context.theme.color }}>
        { this.props.children }
      </div>
    );
  }
}

TextLabel.contextTypes = {
  theme: PropTypes.object
}

export default TextLabel;
