// @flow

import cx from 'classnames';
import * as d3 from 'd3';
import * as React from 'react';

type Props = {
  className: ?string,
  data: Array<any>,
  height: number,
  x: Function,
  y: Function,
};

class Area extends React.Component<Props> {
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

export default Area;
