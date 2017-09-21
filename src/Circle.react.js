import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

class Circle extends React.Component {
  render() {
    const {className, x, y, r} = this.props;

    return (
      <circle
        className={cx('circle', className)}
        cx={x}
        cy={y}
        r={r}
      />
    );
  }
}

Circle.propTypes = {
  r: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default Circle;
