// @flow

import cx from 'classnames';
import * as React from 'react';

type Props = {
  className: ?string,
  close: number,
  date: Date,
  high: number,
  low: number,
  open: number,
  width: number,
  x: Function,
  y: Function,
};

const OHLC = (props: Props) => {
  const {className, width, x, y} = props;
  const date = x(props.date);
  const close = y(props.close);
  const high = y(props.high);
  const low = y(props.low);
  const open = y(props.open);
  const diff = open - close;

  return (
    <g
      className={cx('ohlc', {
        'gain': diff > 0,
        'loss': diff < 0,
      }, className)}>
      <line
        x1={date}
        x2={date}
        y1={high}
        y2={low}
      />
      <line
        className="open"
        strokeLinecap="square"
        x1={date - width / 2}
        x2={date}
        y1={open}
        y2={open}
      />
      <line
        className="close"
        strokeLinecap="square"
        x1={date}
        x2={date + width / 2}
        y1={close}
        y2={close}
      />
    </g>
  );
};

export default OHLC;
