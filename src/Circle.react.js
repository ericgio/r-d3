import PropTypes from 'prop-types';
import React from 'react';

export const Circles = ({children}) => (
  <g className="circles">
    {children}
  </g>
);

export class Circle extends React.Component {
  static propTypes = {
    r: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  };

  render() {
    const {x, y, r} = this.props;

    return (
      <circle
        className="circle"
        cx={x}
        cy={y}
        r={r}
      />
    );
  }
}
