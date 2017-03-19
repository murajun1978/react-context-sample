import React, { PropTypes } from 'react';

const TextLabel = ({ children }, context) => (
  <div style={{ color: context.color }}>
    { children }
  </div>
);

TextLabel.contextTypes = {
  color: PropTypes.string
}

export default TextLabel;
