// @flow

import cx from 'classnames';
import React from 'react';

type Props = {
  className: ?string,
};

const Circles = (props: Props) => (
  <g
    {...props}
    className={cx('circles', props.className)}
  />
);

export default Circles;
