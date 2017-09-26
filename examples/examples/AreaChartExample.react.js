import * as d3 from 'd3';
import React from 'react';

import {Area, Axis, Chart} from '../../src';
import {getInnerHeight, getInnerWidth, translate} from '../../src/utils';

import Section from '../components/Section.react';

import stockData from '../data/aaplPrice.tsv';

/**
 * Adapted from https://bl.ocks.org/mbostock/3883195
 */
class AreaChartExample extends React.Component {
  render() {
    const height = 500;
    const width = 960;
    const margin = {top: 20, right: 20, bottom: 30, left: 50};
    const innerHeight = getInnerHeight(height, margin);
    const innerWidth = getInnerWidth(width, margin);

    const parseTime = d3.timeParse('%d-%b-%y');
    const data = [];
    stockData.forEach(d => {
      data.push({
        close: +d.close,
        date: parseTime(d.date),
      });
    });

    const x = d3.scaleTime()
      .domain(d3.extent(data, d => d.date))
      .rangeRound([0, innerWidth]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.close)])
      .rangeRound([innerHeight, 0]);

    return (
      <Section title="Area Chart">
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
            scale={y}>
            <text
              dy="0.71em"
              fill="#000"
              textAnchor="end"
              transform="rotate(-90)"
              y={6}>
              Price ($)
            </text>
          </Axis>
          <Area
            data={data}
            fill="steelblue"
            x={d => x(d.date)}
            y0={innerHeight}
            y1={d => y(d.close)}
          />
        </Chart>
      </Section>
    );
  }
}

export default AreaChartExample;
