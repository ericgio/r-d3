import * as d3 from 'd3';
import React from 'react';

import {Arc, Chart} from '../../src';
import {translate} from '../../src/utils';

import Section from '../components/Section.react';

import population from '../data/population';

/**
 * Adapted from https://bl.ocks.org/mbostock/3887235
 */
class PieChartExample extends React.Component {
  render() {
    const height = 500;
    const width = 960;
    const radius = Math.min(width, height) / 2;

    var color = d3.scaleOrdinal([
      '#98abc5',
      '#8a89a6',
      '#7b6888',
      '#6b486b',
      '#a05d56',
      '#d0743c',
      '#ff8c00',
    ]);

    const pie = d3.pie()
      .sort(null)
      .value(d => d.population);

    return (
      <Section title="Pie Chart">
        <Chart
          height={height}
          transform={translate(width / 2, height / 2)}
          width={width}>
          {pie(population).map(({data, index, ...props}) => (
            <Arc
              {...props}
              childOffset={30}
              fill={color(data.age)}
              key={index}
              outerRadius={radius - 10}
              stroke="#fff">
              <text
                fontSize="10px"
                textAnchor="middle">
                {data.age}
              </text>
            </Arc>
          ))}
        </Chart>
      </Section>
    );
  }
}

export default PieChartExample;
