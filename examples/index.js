// @flow

import * as d3 from 'd3';
import React from 'react';
import {render} from 'react-dom';

import {Symbol} from '../src';
import AreaChartExample from './examples/AreaChartExample.react';
import BarChartExample from './examples/BarChartExample.react';
import LineChartExample from './examples/LineChartExample.react';
import PieChartExample from './examples/PieChartExample.react';
import ScatterPlotExample from './examples/ScatterPlotExample.react';

import Section from './components/Section.react';

import './examples.css';

class Examples extends React.Component<{}> {
  render() {
    return (
      <div className="container">
        <ul className="nav">
          <li>Area</li>
          <li>Line</li>
          <li>Scatter</li>
          <li>Bar</li>
          <li>Pie</li>
          <li>Donut</li>
          <li>Symbols</li>
        </ul>
        <div className="column">
          <AreaChartExample />
          <LineChartExample />
          <ScatterPlotExample />
          <BarChartExample />
          <PieChartExample />
          <Section title="Symbols">
            {d3.symbols.map((type, idx) => (
              <svg height={100} key={idx} width={100}>
                <Symbol size={2500} type={type} />
              </svg>
            ))}
          </Section>
        </div>
      </div>
    );
  }
}

render(
  <Examples />,
  document.getElementById('root')
);
