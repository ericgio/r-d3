// @flow

import cx from 'classnames';
import * as React from 'react';

type Props = {
  className: ?string,
  r: number,
  x: number,
  y: number,
};

class Circle extends React.Component<Props> {
  render() {
    const {className, x, y, r, ...props} = this.props;

    return (
      <circle
        {...props}
        className={cx('circle', className)}
        cx={x}
        cy={y}
        r={r}
      />
    );
  }
}

export default Circle;
