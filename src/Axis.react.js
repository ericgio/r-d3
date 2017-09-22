// @flow

import cx from 'classnames';
import * as d3 from 'd3';
import invariant from 'invariant';
import * as React from 'react';
import {findDOMNode} from 'react-dom';

type Props = {
  children: React.Node,
  className: ?string,
  orient: 'bottom' | 'left' | 'right' | 'top',
  scale: Function,
  ticks: ?number,
  tickFormat: ?Function,
  tickSize: number,
  tickValues: ?Array<any>,
  transform: ?string,
};

class Axis extends React.Component<Props> {
  static defaultProps = {
    tickSize: 6,
  };

  componentDidMount() {
    this._renderAxis();
  }

  componentDidUpdate() {
    this._renderAxis();
  }

  render() {
    const {children, className, transform} = this.props;
    return (
      <g
        className={cx('axis', className)}
        transform={transform}>
        {children}
      </g>
    );
  }

  _renderAxis = () => {
    const {orient, scale, ticks, tickFormat, tickSize, tickValues} = this.props;

    let axis;
    switch (orient) {
      case 'bottom':
        axis = d3.axisBottom(scale);
        break;
      case 'left':
        axis = d3.axisLeft(scale);
        break;
      case 'right':
        axis = d3.axisRight(scale);
        break;
      case 'top':
        axis = d3.axisTop(scale);
        break;
    }

    invariant(
      axis,
      'You must set the `orient` prop to one of: `bottom`, `left`, `right`, ' +
      'or `top`'
    );

    axis
      .ticks(ticks)
      .tickFormat(tickFormat)
      .tickSize(tickSize);

    if (tickValues) {
      axis.tickValues(tickValues);
    }

    d3.select(findDOMNode(this)).call(axis);
  };
}

export default Axis;
