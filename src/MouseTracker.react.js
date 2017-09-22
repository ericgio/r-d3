// @flow

import * as d3 from 'd3';
import React from 'react';
import {findDOMNode} from 'react-dom';

type Props = {
  onMouseMove: Function,
  onMouseOut: Function,
  xScale: Function,
  yScale: Function,
};

class MouseTracker extends React.Component<Props> {
  render() {
    const {onMouseOut, xScale, yScale} = this.props;

    return (
      <g
        onMouseMove={this._handleMouseMove}
        onMouseOut={onMouseOut}>
        <rect
          height={yScale.range()[0]}
          style={{
            fill: 'none',
            pointerEvents: 'all',
          }}
          width={xScale.range()[1]}
        />
      </g>
    );
  }

  _handleMouseMove = (e: SyntheticMouseEvent<any>): void => {
    // Force the event to persist so D3 can use it.
    e.persist();

    // Hack: Temporarily set the event for the mouse.
    let mouse;
    d3.customEvent(e, () => {
      mouse = d3.mouse(findDOMNode(this));
    });

    const {onMouseMove, xScale, yScale} = this.props;

    // Normalize for different scales by converting the mouse position to an
    // x-coordinate in the data.
    onMouseMove(mouse, xScale, yScale);
  }
}

export default MouseTracker;
