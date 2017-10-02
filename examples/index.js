import React from 'react';
import {render} from 'react-dom';

import AreaChartExample from './examples/AreaChartExample.react';
import AreaChartExampleCode from '!raw-loader!./examples/AreaChartExample.react';
import AreaChartStackedExample from './examples/AreaChartStackedExample.react';
import AreaChartStackedExampleCode from '!raw-loader!./examples/AreaChartStackedExample.react';
import BarChartExample from './examples/BarChartExample.react';
import BarChartExampleCode from '!raw-loader!./examples/BarChartExample.react';
import BarChartStackedExample from './examples/BarChartStackedExample.react';
import BarChartStackedExampleCode from '!raw-loader!./examples/BarChartStackedExample.react';
import LineChartExample from './examples/LineChartExample.react';
import LineChartExampleCode from '!raw-loader!./examples/LineChartExample.react';
import FinancialChartExample from './examples/FinancialChartExample.react';
import FinancialChartExampleCode from '!raw-loader!./examples/FinancialChartExample.react';
import PieChartExample from './examples/PieChartExample.react';
import PieChartExampleCode from '!raw-loader!./examples/PieChartExample.react';
import ScatterPlotExample from './examples/ScatterPlotExample.react';
import ScatterPlotExampleCode from '!raw-loader!./examples/ScatterPlotExample.react';
import StreamgraphExample from './examples/StreamgraphExample.react';
import StreamgraphExampleCode from '!raw-loader!./examples/StreamgraphExample.react';
import SymbolsExample from './examples/SymbolsExample.react';
import SymbolsExampleCode from '!raw-loader!./examples/SymbolsExample.react';
import TreemapExample from './examples/TreemapExample.react';
import TreemapExampleCode from '!raw-loader!./examples/TreemapExample.react';

import Section from './components/Section.react';

import './css/code.css';
import './css/examples.css';

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
          <Section
            code={AreaChartExampleCode}
            title="Area Chart">
            <AreaChartExample />
          </Section>
          <Section
            code={AreaChartStackedExampleCode}
            title="Stacked Area Chart">
            <AreaChartStackedExample />
          </Section>
          <Section
            code={StreamgraphExampleCode}
            title="Streamgraph">
            <StreamgraphExample />
          </Section>
          <Section
            code={LineChartExampleCode}
            title="Line Chart">
            <LineChartExample />
          </Section>
          <Section
            code={ScatterPlotExampleCode}
            title="Scatterplot">
            <ScatterPlotExample />
          </Section>
          <Section
            code={BarChartExampleCode}
            title="Bar Chart">
            <BarChartExample />
          </Section>
          <Section
            code={BarChartStackedExampleCode}
            title="Stacked Bar Chart">
            <BarChartStackedExample />
          </Section>
          <Section
            code={PieChartExampleCode}
            title="Pie/Donut Chart">
            <PieChartExample />
          </Section>
          <Section
            code={TreemapExampleCode}
            title="Treemap">
            <TreemapExample />
          </Section>
          <Section
            code={FinancialChartExampleCode}
            title="Financial Chart">
            <FinancialChartExample />
          </Section>
          <Section
            code={SymbolsExampleCode}
            title="Symbols">
            <SymbolsExample />
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
