import * as d3 from 'd3';
import React from 'react';

import {Axis, Bar, Chart} from '../../src';
import {getInnerHeight, getInnerWidth, translate} from '../../src/utils';

import data from '../data/letterFrequency.tsv';

/* example-start */
/**
 * Adapted from https://bl.ocks.org/mbostock/3885304
 */
class BarChartExample extends React.Component {
  render() {
    const height = 500;
    const width = 960;
    const margin = {top: 20, right: 20, bottom: 30, left: 40};
    const innerHeight = getInnerHeight(height, margin);
    const innerWidth = getInnerWidth(width, margin);

    const x = d3.scaleBand()
      .domain(data.map(d => d.letter))
      .rangeRound([0, innerWidth])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.frequency)])
      .rangeRound([innerHeight, 0]);

    return (
      <Chart
        height={height}
        transform={translate(margin.left, margin.top)}
        width={width}>
        <Axis
          className="x-axis"
          orient="bottom"
          scale={x}
          transform={translate(0, innerHeight)}
        />
        <Axis
          className="y-axis"
          orient="left"
          scale={y}
          tickFormat={frequency => `${Math.floor(frequency * 100)}%`}>
          <text
            dy="0.71em"
            fill="#000"
            textAnchor="end"
            transform="rotate(-90)"
            y={6}>
            Frequency
          </text>
        </Axis>
        {data.map(d => (
          <Bar
            fill="steelblue"
            height={innerHeight - y(d.frequency)}
            key={d.letter}
            width={x.bandwidth()}
            x={x(d.letter)}
            y={y(d.frequency)}
          />
        ))}
      </Chart>
    );
  }
}
/* example-end */

export default BarChartExample;
