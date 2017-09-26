import * as d3 from 'd3';
import React from 'react';

import {Area, Chart} from '../../src';
import Section from '../components/Section.react';

function bumps(n, m) {
  let a = [], i;
  for (i = 0; i < n; ++i) a[i] = 0;
  for (i = 0; i < m; ++i) bump(a, n);
  return a;
}

function bump(a, n) {
  const x = 1 / (0.1 + Math.random());
  const y = 2 * Math.random() - 0.5;
  const z = 10 / (0.1 + Math.random());

  for (let i = 0; i < n; i++) {
    let w = (i / n - y) * z;
    a[i] += x * Math.exp(-w * w);
  }
}

/**
 * Adapted from https://bl.ocks.org/mbostock/4060954
 */
class StreamgraphExample extends React.Component {
  render() {
    const height = 500;
    const width = 960;

    const n = 20;   // # of layers
    const m = 200;  // # of samples per layer
    const k = 10;   // # of bumps per layer

    const stack = d3.stack()
      .keys(d3.range(n))
      .offset(d3.stackOffsetWiggle);

    const layers = stack(d3.transpose(d3.range(n).map(() => bumps(m, k))));

    const x = d3.scaleLinear()
      .domain([0, m - 1])
      .range([0, width - 2]); // Account for 1px border

    const y = d3.scaleLinear()
      .domain([
        d3.min(layers, l => d3.min(l, d => d[0])),
        d3.max(layers, l => d3.max(l, d => d[1])),
      ])
      .range([height, 0]);

    var z = d3.interpolateCool;

    return (
      <Section title="Streamgraph">
        <Chart
          height={height}
          width={width}>
          {layers.map(d => (
            <Area
              data={d}
              fill={z(Math.random())}
              key={d.key}
              x={(d, i) => x(i)}
              y0={d => y(d[0])}
              y1={d => y(d[1])}
            />
          ))}
        </Chart>
      </Section>
    );
  }
}

export default StreamgraphExample;
