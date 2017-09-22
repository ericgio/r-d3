// @flow

import cx from 'classnames';
import * as d3 from 'd3';
import invariant from 'invariant';
import * as React from 'react';

import {translate} from './utils';

type Props = {
  childOffset: number,
  children: ?React.Element<any>,
  className: ?string,
  cornerRadius: number,
  endAngle: number,
  innerRadius: number,
  outerRadius: number,
  padAngle: number,
  padRadius: number,
  startAngle: number,
};

class Arc extends React.Component<Props> {
  static defaultProps = {
    childOffset: 20,
    cornerRadius: 0,
    innerRadius: 0,
    padAngle: 0,
    padRadius: 0,
  };

  render() {
    const {
      children,
      childOffset,
      className,
      cornerRadius,
      endAngle,
      innerRadius,
      outerRadius,
      padAngle,
      padRadius,
      startAngle,
      ...otherProps
    } = this.props;

    const arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .startAngle(startAngle)
      .endAngle(endAngle)
      .cornerRadius(cornerRadius)
      .padAngle(padAngle)
      .padRadius(padRadius);

    return (
      <g className={cx('arc', className)}>
        <path {...otherProps} d={arc()} />
        {this._getChild()}
      </g>
    );
  }

  _getChild = () => {
    const {childOffset, children, outerRadius} = this.props;

    invariant(
      React.Children.count(children) < 2,
      '`Arc` accepts at most one child.'
    );

    if (!children) {
      return null;
    }

    const arc = d3.arc()
      .innerRadius(outerRadius - childOffset)
      .outerRadius(outerRadius - childOffset);

    return React.cloneElement(children, {
      ...children.props,
      transform: translate(...arc.centroid(this.props)),
    });
  }
}

export default Arc;
