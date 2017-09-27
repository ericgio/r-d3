import * as d3 from 'd3';
import React from 'react';

import {Area, Axis, Chart} from '../../src';
import {getInnerHeight, getInnerWidth, translate} from '../../src/utils';

import browserData from '../data/browsers.tsv';

/* example-start */
/**
 * Adapted from https://bl.ocks.org/mbostock/3885211
 */
class AreaChartStackedExample extends React.Component {
  render() {
    const height = 500;
    const width = 960;
    const margin = {top: 20, right: 20, bottom: 30, left: 50};
    const innerHeight = getInnerHeight(height, margin);
    const innerWidth = getInnerWidth(width, margin);

    const keys = browserData.columns.slice(1);
    const parseDate = d3.timeParse('%Y %b %d');
    const data = [];
    browserData.forEach((d, i, cols) => {
      data.push({
        ...d,
        date: parseDate(d.date),
      });
    });

    const x = d3.scaleTime()
      .domain(d3.extent(data, d => d.date))
      .range([0, innerWidth]);

    const y = d3.scaleLinear()
      .domain([0, 100])
      .range([innerHeight, 0]);

    const z = d3.scaleOrdinal(d3.schemeCategory10)
      .domain(keys);

    const stack = d3.stack().keys(keys);

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
          tickFormat={d => `${d}%`}
        />
        {stack(data).map(b => {
          const last = b.length - 1;

          // Filter out browsers with less than 1% market share.
          if (b[last][1] - b[last][0] < 1) {
            return null;
          }

          return (
            <g className="layer" key={b.key}>
              <Area
                data={b}
                fill={z(b.key)}
                x={d => x(d.data.date)}
                y0={d => y(d[0])}
                y1={d => y(d[1])}
              />
              <text
                dy=".35em"
                textAnchor="end"
                x={innerWidth - 6}
                y={y((b[last][0] + b[last][1]) / 2)}>
                {b.key}
              </text>
            </g>
          );
        })}
      </Chart>
    );
  }
}
/* example-end */

export default AreaChartStackedExample;
