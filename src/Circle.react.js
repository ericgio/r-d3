// @flow

import cx from 'classnames';
import * as React from 'react';

type Props = {
  className: ?string,
  cx: number,
  cy: number,
  r: number,
};

class Circle extends React.Component<Props> {
  render() {
    const {className, ...props} = this.props;

    return (
      <circle
        {...props}
        className={cx('circle', className)}
      />
    );
  }
}

export default Circle;
