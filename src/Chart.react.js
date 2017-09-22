// @flow

import * as React from 'react';

type Props = {
  className: ?string,
  height: number,
  width: number,
};

const Chart = (props: Props) => {
  const {className, height, width, ...otherProps} = props;

  return (
    <svg
      className={className}
      height={height}
      width={width}>
      <g
        {...otherProps}
        className="chart"
      />
    </svg>
  );
};

export default Chart;
