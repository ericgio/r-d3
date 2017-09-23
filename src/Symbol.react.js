// @flow

import cx from 'classnames';
import * as d3 from 'd3';
import * as React from 'react';

import {translate} from './utils';

type Props = {
  className: ?string,
  context: any,
  size: number | Function,
  type: Function,
};

class Symbol extends React.Component<Props> {
  static defaultProps = {
    size: 64,
  };

  render() {
    const {className, size, type, ...props} = this.props;

    const symbol = d3.symbol()
      .size(size)
      .type(type);

    return (
      <g
        className={cx('symbol', className)}
        transform={translate(50, 50)}>
        <path
          {...props}
          d={symbol()}
        />
      </g>
    );
  }
}

export default Symbol;
