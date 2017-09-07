import cx from 'classnames';
import * as d3 from 'd3';
import PropTypes from 'prop-types';
import React from 'react';

class Area extends React.Component {
  render() {
    const {className, data, height, x, y, ...props} = this.props;

    const area = d3.area()
      .x(x)
      .y0(height)
      .y1(y);

    return (
      <path
        {...props}
        className={cx('area', className)}
        d={area(data)}
      />
    );
  }
}

Area.propTypes = {
  data: PropTypes.array.isRequired,
  height: PropTypes.number.isRequired,
  x: PropTypes.func.isRequired,
  y: PropTypes.func.isRequired,
};

export default Area;
