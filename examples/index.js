'use strict';

import * as d3 from 'd3';
import React from 'react';
import {render} from 'react-dom';

import {Axis, Chart, Line} from '../src';
import {getInnerHeight, getInnerWidth, translate} from '../src/utils';

const DISTANCE_MAX = 100;
const DISTANCE_MIN = 0;

const SEC_PER_HR = 3600;

const SILVER_BUCKLE = 24 * SEC_PER_HR;

const TIME_MAX = 30 * SEC_PER_HR;
const TIME_MIN = 0;

function secondsToTime(seconds) {
  seconds = parseInt(seconds, 10);

  let h = Math.floor(seconds / 3600);
  let m = Math.floor((seconds - (h * 3600)) / 60);
  let s = seconds - (h * 3600) - (m * 60);

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  return `${h}:${m}:${s}`;
}

class Examples extends React.Component {
  render() {
    const {height, width} = this.props;
    const margin = {top: 20, right: 20, bottom: 20, left: 50};
    const innerHeight = getInnerHeight(height, margin);
    const innerWidth = getInnerWidth(width, margin);

    const x = d3.scaleLinear()
      .domain([DISTANCE_MIN, DISTANCE_MAX])
      .range([0, innerWidth]);

    const y = d3.scaleLinear()
      .domain([TIME_MIN, TIME_MAX])
      .range([innerHeight, 0]);

    return (
      <Chart
        height={height}
        transform={translate(margin.left, margin.top)}
        width={width}>
        <Axis
          className="x-axis"
          orient="bottom"
          scale={x}
          ticks={10}
          transform={translate(0, innerHeight)}
        />
        <Axis
          className="y-axis"
          orient="left"
          scale={y}
          tickFormat={seconds => secondsToTime(seconds)}
          ticks={30}
          tickValues={[0, 6, 12, 18, 24, 30].map(t => t * SEC_PER_HR)}
        />
        <Line
          className="silver-buckle-cutoff"
          data={[
            {distance: DISTANCE_MIN, duration: SILVER_BUCKLE},
            {distance: DISTANCE_MAX, duration: SILVER_BUCKLE},
          ]}
          x={d => x(d.distance)}
          y={d => y(d.duration)}
        />
      </Chart>
    );
  }
}

render(
  <Examples
    height={500}
    width={1000}
  />,
  document.getElementById('root')
);
