// @flow

import cx from 'classnames';
import * as d3 from 'd3';
import * as React from 'react';

type Props = {
  className: ?string,
  data: Array<any>,
  x: Function | number,
  y0: Function | number,
  y1: Function | number,
};

class Area extends React.Component<Props> {
  render() {
    const {className, data, x, y0, y1, ...props} = this.props;

    const area = d3.area()
      .x(x)
      .y0(y0)
      .y1(y1);

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
