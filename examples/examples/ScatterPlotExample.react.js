import * as d3 from 'd3';
import React from 'react';

import {Axis, Chart, Circle, Circles} from '../../src';
import {getInnerHeight, getInnerWidth, translate} from '../../src/utils';

import Section from '../components/Section.react';

import flowerData from '../data/flowers.tsv';

/**
 * Adapted from https://bl.ocks.org/mbostock/3887118
 */
class ScatterPlotExample extends React.Component {
  render() {
    const height = 500;
    const width = 960;
    const margin = {top: 20, right: 20, bottom: 30, left: 40};
    const innerHeight = getInnerHeight(height, margin);
    const innerWidth = getInnerWidth(width, margin);

    const data = [];
    flowerData.forEach(d => {
      data.push({
        ...d,
        sepalLength: +d.sepalLength,
        sepalWidth: +d.sepalWidth,
      });
    });

    const x = d3.scaleLinear()
      .domain(d3.extent(data, d => d.sepalWidth))
      .nice()
      .range([0, innerWidth]);

    const y = d3.scaleLinear()
      .domain(d3.extent(data, d => d.sepalLength))
      .nice()
      .range([innerHeight, 0]);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    return (
      <Section title="Scatterplot">
        <Chart
          height={height}
          transform={translate(margin.left, margin.top)}
          width={width}>
          <Axis
            className="x-axis"
            orient="bottom"
            scale={x}
            transform={translate(0, innerHeight)}>
            <text
              fill="#000"
              textAnchor="end"
              x={innerWidth}
              y={-6}>
              Sepal Width (cm)
            </text>
          </Axis>
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
              Sepal Length (cm)
            </text>
          </Axis>
          {data.map((d, idx) => (
            <Circle
              fill={color(d.species)}
              key={idx}
              r={3.5}
              stroke="#000"
              x={x(d.sepalWidth)}
              y={y(d.sepalLength)}
            />
          ))}
          {color.domain().map((species, i) => (
            <g
              className="legend"
              key={i}
              transform={translate(0, i * 20)}>
              <rect
                fill={color(species)}
                height={18}
                width={18}
                x={innerWidth - 18}
              />
              <text
                dy=".35em"
                textAnchor="end"
                x={innerWidth - 24}
                y={9}>
                {species}
              </text>
            </g>
          ))}
        </Chart>
      </Section>
    );
  }
}

export default ScatterPlotExample;
