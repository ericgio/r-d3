import * as d3 from 'd3';
import React from 'react';

import {Axis, Candlestick, Chart, OHLC} from '../../src';
import {getInnerHeight, getInnerWidth, translate} from '../../src/utils';

import ohlcData from '../data/ohlc.csv';

/* example-start */
/**
 * Adapted from http://bl.ocks.org/andredumas/27c4a333b0e0813e093d
 */
class FinancialChartExample extends React.Component {
  state = {
    type: 'candlestick',
  };

  render() {
    const {type} = this.state;
    const height = 500;
    const width = 960;
    const margin = {top: 20, right: 20, bottom: 30, left: 50};
    const innerHeight = getInnerHeight(height, margin);
    const innerWidth = getInnerWidth(width, margin);

    const keys = ohlcData.columns.slice(1);
    const parseDate = d3.timeParse('%d-%b-%y');
    const data = [];
    ohlcData.slice(50, 200).forEach(d => {
      const date = parseDate(d.Date);
      const n = {date};
      keys.forEach(k => n[k.toLowerCase()] = +d[k]);
      data.push(n);
    });

    const x = d3.scaleTime()
      .domain(d3.extent(data, d => d.date))
      .rangeRound([0, innerWidth]);

    const y = d3.scaleLinear()
      .domain([
        d3.min(data, d => d3.min([d.close, d.high, d.low, d.open])) - 1,
        d3.max(data, d => d3.max([d.close, d.high, d.low, d.open])) + 1,
      ])
      .rangeRound([innerHeight, 0]);

    const Component = type === 'candlestick' ?
      Candlestick :
      OHLC;

    return (
      <div>
        <div style={{right: '10px', position: 'absolute', top: '10px'}}>
          {['Candlestick', 'OHLC'].map(t => (
            <label key={t} style={{marginRight: '10px'}}>
              <input
                checked={t.toLowerCase() === type}
                name="ohlc-example"
                onChange={this._handleChange}
                type="radio"
                value={t.toLowerCase()}
              /> {t} Chart
            </label>
          ))}
        </div>
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
          {data.map(d => (
            <Component
              {...d}
              key={d.date.getTime()}
              width={3}
              x={x}
              y={y}
            />
          ))}
        </Chart>
      </div>
    );
  }

  _handleChange = e => {
    this.setState({type: e.target.value});
  }
}
/* example-end */

export default FinancialChartExample;
