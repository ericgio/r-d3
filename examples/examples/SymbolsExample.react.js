import * as d3 from 'd3';
import React from 'react';

import {Symbol} from '../../src';
import Section from '../components/Section.react';

/**
 * Adapted from https://bl.ocks.org/mbostock/3883195
 */
class SymbolsExample extends React.Component {
  render() {
    return (
      <Section title="Symbols">
        {d3.symbols.map((type, idx) => (
          <svg height={100} key={idx} width={100}>
            <Symbol size={2500} type={type} />
          </svg>
        ))}
      </Section>
    );
  }
}

export default SymbolsExample;
