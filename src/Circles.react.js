import cx from 'classnames';
import React from 'react';

const Circles = ({children, className}) => (
  <g className={cx('circles', className)}>
    {children}
  </g>
);

export default Circles;
