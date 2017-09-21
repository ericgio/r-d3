import cx from 'classnames';
import React from 'react';

const Bars = ({children, className}) => (
  <g className={cx('bars', className)}>
    {children}
  </g>
);

export default Bars;
