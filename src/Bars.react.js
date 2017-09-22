// @flow

import cx from 'classnames';
import React from 'react';

type Props = {
  className: ?string,
};

const Bars = (props: Props) => (
  <g
    {...props}
    className={cx('bars', props.className)}
  />
);

export default Bars;
