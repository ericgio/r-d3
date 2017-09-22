// @flow

import cx from 'classnames';
import * as d3 from 'd3';
import React from 'react';

type Props = {
  className: ?string,
  curve: Function,
  data: Array<any>,
  x: Function,
  y: Function,
};

class Line extends React.Component<Props> {
  static defaultProps = {
    curve: d3.curveLinear,
  };

  render() {
    const {className, curve, data, x, y, ...props} = this.props;

    const line = d3.line()
      .curve(curve)
      .x(x)
      .y(y);

    return (
      <path
        {...props}
        className={cx('line', className)}
        d={line(data)}
        fill="none"
      />
    );
  }
}

export default Line;
