import * as d3 from 'd3';
import React from 'react';

import {Axis, Bar, Chart} from '../../src';
import {getInnerHeight, getInnerWidth, translate} from '../../src/utils';

import stateData from '../data/statePopulations.csv';

/* example-start */
/**
 * Adapted from https://bl.ocks.org/mbostock/3886208
 */
class BarChartStackedExample extends React.Component {
  render() {
    const height = 500;
    const width = 960;
    const margin = {top: 20, right: 20, bottom: 30, left: 40};
    const innerHeight = getInnerHeight(height, margin);
    const innerWidth = getInnerWidth(width, margin);

    const {columns} = stateData;
    const keys = columns.slice(1);

    const data = stateData.map((d) => {
      let total = 0;
      for (let ii = 1; ii < columns.length; ++ii) {
        total += d[columns[ii]] = +d[columns[ii]];
      }
      return {...d, total};
    });
    data.sort((a, b) => b.total - a.total);

    const x = d3.scaleBand()
      .domain(data.map((d) => d.State))
      .rangeRound([0, innerWidth])
      .paddingInner(0.05)
      .align(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, (d) => d.total)])
      .nice()
      .rangeRound([innerHeight, 0]);

    const z = d3.scaleOrdinal()
      .domain(keys)
      .range([
        '#98abc5',
        '#8a89a6',
        '#7b6888',
        '#6b486b',
        '#a05d56',
        '#d0743c',
        '#ff8c00',
      ]);

    const stackedData = d3.stack().keys(keys)(data);

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
          tickFormat={(pop) => `${pop / 1000000}M`}>
          <text
            dy="0.32em"
            fill="#000"
            fontWeight="bold"
            textAnchor="start"
            x={2}
            y={y(y.ticks().pop()) + 0.5}>
            Population
          </text>
        </Axis>
        {stackedData.map((d) => (
          <g fill={z(d.key)} key={d.key}>
            {d.map((s) => (
              <Bar
                height={y(s[0]) - y(s[1])}
                key={s.data.State}
                width={x.bandwidth()}
                x={x(s.data.State)}
                y={y(s[1])}
              />
            ))}
          </g>
        ))}
        {keys.slice().reverse().map((key, i) => (
          <g
            className="legend"
            key={i}
            transform={translate(0, i * 20)}>
            <rect
              fill={z(key)}
              height={19}
              width={19}
              x={innerWidth - 19}
            />
            <text
              dy=".35em"
              textAnchor="end"
              x={innerWidth - 24}
              y={9}>
              {key}
            </text>
          </g>
        ))}
      </Chart>
    );
  }
}
/* example-end */

export default BarChartStackedExample;
