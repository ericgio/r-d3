// @flow

'use strict';

import * as d3 from 'd3';
import React from 'react';
import {render} from 'react-dom';

import {Arc, Area, Axis, Bar, Bars, Chart, Circle, Circles, Line, Symbol} from '../src';
import {getInnerHeight, getInnerWidth, translate} from '../src/utils';

type Props = {
  height: number,
  width: number,
};

const data = [
  27.87, 1.49, 0, 18.03, 35.26, 20.43, 40.03, 14.17, 40.49, 55.03,
  36.01, 33.64, 56.15, 47.86, 62.74, 51.54, 58.04, 40.05, 82.78, 0,
  22.02, 0, 6.64, 7.17, 6.33, 0, 8.37, 15.35, 0, 24.16, 0, 13.88, 18.65,
  23.01, 21.02, 10.82, 20.34, 5.21, 10.03, 12.02, 17.11, 13.08, 22.04,
  29.8, 21.36, 36.51, 33.53, 37.26, 41.52, 23.08, 45.08, 47.57,
];

const pieData = [
  ['<5', 2704659],
  ['5-13', 4499890],
  ['14-17', 2159981],
  ['18-24', 3853788],
  ['25-44', 14106543],
  ['45-64', 8819342],
  ['≥65', 612463],
].map(d => ({
  age: d[0],
  population: d[1],
}));

class Examples extends React.Component<Props> {
  render() {
    const {height, width} = this.props;
    const margin = {top: 20, right: 20, bottom: 20, left: 50};
    const innerHeight = getInnerHeight(height, margin);
    const innerWidth = getInnerWidth(width, margin);

    const x = d3.scaleLinear()
      .domain([0, data.length-1])
      .range([0, innerWidth]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([innerHeight, 0]);

    const pie = d3.pie()
      .value(d => d.population);

    const ExampleChart = props => (
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
        />
        {props.children}
      </Chart>
    );

    return (
      <div>
        <h2>Basic Charts</h2>
        <ExampleChart>
          <Area
            data={data}
            height={innerHeight}
            x={(d, idx) => x(idx)}
            y={(d, idx) => y(d)}
          />
        </ExampleChart>
        <ExampleChart>
          <Line
            data={data}
            stroke="#000"
            x={(d, idx) => x(idx)}
            y={(d, idx) => y(d)}
          />
        </ExampleChart>
        <ExampleChart>
          <Circles>
            {data.map((d, idx) => (
              <Circle
                key={idx}
                r={3}
                x={x(idx)}
                y={y(d)}
              />
            ))}
          </Circles>
        </ExampleChart>
        <ExampleChart>
          <Bars>
            {data.map((d, idx) => (
              <Bar
                height={innerHeight - y(d)}
                key={idx}
                width={5}
                x={x(idx)}
                y={y(d)}
              />
            ))}
          </Bars>
        </ExampleChart>
        <Chart
          height={height}
          transform={translate(width / 2, height / 2)}
          width={width}>
          {pie(pieData).map(({data, index, ...props}) => (
            <Arc
              {...props}
              key={index}
              outerRadius={height / 2}
              stroke="#fff">
              <text
                fill="#fff"
                fontSize="10px"
                textAnchor="middle">
                {data.age}
              </text>
            </Arc>
          ))}
        </Chart>
        <Chart
          height={height}
          transform={translate(width / 2, height / 2)}
          width={width}>
          {pie(pieData).map(({data, index, ...props}) => (
            <Arc
              {...props}
              innerRadius={45}
              key={index}
              outerRadius={height / 2}
              stroke="#fff">
              <text
                fill="#fff"
                fontSize="10px"
                textAnchor="middle">
                {data.age}
              </text>
            </Arc>
          ))}
        </Chart>
        {d3.symbols.map((type, idx) => (
          <svg height={100} key={idx} width={100}>
            <Symbol size={2500} type={type} />
          </svg>
        ))}
      </div>
    );
  }
}

render(
  <Examples
    height={175}
    width={350}
  />,
  document.getElementById('root')
);
