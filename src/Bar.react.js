// @flow

import cx from 'classnames';
import * as React from 'react';

type Props = {
  className: ?string,
  height: number,
  width: number,
  x: number,
  y: number,
};

class Bar extends React.Component<Props> {
  render() {
    return (
      <rect
        {...this.props}
        className={cx('bar', this.props.className)}
      />
    );
  }
}

export default Bar;
