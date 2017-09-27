import * as d3 from 'd3';
import React from 'react';

import data from '../data/flare.csv';

/* example-start */
/**
 * Adapted from https://bl.ocks.org/mbostock/6bbb0a7ff7686b124d80
 */
class TreemapExample extends React.Component {
  render() {
    const height = 1060;
    const width = 960;

    const format = d3.format(',d');

    const color = d3.scaleOrdinal()
      .range(d3.schemeCategory10.map(c => {
        c = d3.rgb(c);
        c.opacity = 0.6;
        return c;
      }));

    const stratify = d3.stratify()
      .parentId(d => d.id.substring(0, d.id.lastIndexOf('.')));

    const treemap = d3.treemap()
      .size([width, height])
      .padding(1)
      .round(true);

    const root = stratify(data)
      .sum(d => d.value)
      .sort((a, b) => b.height - a.height || b.value - a.value);

    treemap(root);

    const getColor = d => {
      while (d.depth > 1) {
        d = d.parent;
      }
      return color(d.id);
    };

    return (
      <div style={{height}}>
        {root.leaves().map(d => (
          <div
            className="node"
            key={d.id}
            style={{
              background: getColor(d),
              boxSizing: 'border-box',
              height: `${d.y1 - d.y0}px`,
              left: `${d.x0}px`,
              overflow: 'hidden',
              position: 'absolute',
              top: `${d.y0}px`,
              width: `${d.x1 - d.x0}px`,
            }}
            title={`${d.id}\n${format(d.value)}`}>
            <div
              className="node-label"
              style={{
                fontSize: '10px',
                lineHeight: '1em',
                padding: '4px',
                whiteSpace: 'pre',
              }}>
              {d.id.substring(d.id.lastIndexOf('.') + 1)
                .split(/(?=[A-Z][^A-Z])/g)
                .join('\n')
              }
              <div
                className="node-value"
                style={{
                  color: 'rgba(0,0,0,0.8)',
                  fontSize: '9px',
                  marginTop: '1px',
                }}>
                {format(d.value)}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
/* example-end */

export default TreemapExample;
