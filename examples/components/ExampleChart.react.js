import React from 'react';

import {Axis, Chart} from '../../src';
import {getInnerHeight, getInnerWidth, translate} from '../../src/utils';

const ExampleChart = ({children, height, margin, width, x, y}) => (
  <Chart
    height={height}
    transform={translate(margin.left, margin.top)}
    width={width}>
    <Axis
      className="x-axis"
      orient="bottom"
      scale={x}
      transform={translate(0, getInnerHeight(height))}
    />
    <Axis
      className="y-axis"
      orient="left"
      scale={y}
    />
    {children}
  </Chart>
);

export default ExampleChart;
