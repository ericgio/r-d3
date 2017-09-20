import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

class Bar extends React.Component {
  render() {
    const {className, height, onClick, width, x, y} = this.props;

    return (
      <rect
        className={cx('bar', className)}
        height={height}
        onClick={e => onClick && onClick(e)}
        width={width}
        x={x}
        y={y}
      />
    );
  }
}

Bar.propTypes = {
  height: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  width: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default Bar;
