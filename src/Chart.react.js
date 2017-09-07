import PropTypes from 'prop-types';
import React from 'react';

import {translate} from 'utils/';
import {MARGIN} from 'constants/margin';

const Chart = ({children, className, height, transform, width}) => (
  <svg
    className={className}
    height={height}
    width={width}>
    <g
      className="chart"
      transform={transform}>
      {children}
    </g>
  </svg>
);

Chart.propTypes = {
  height: PropTypes.number.isRequired,
  transform: PropTypes.string,
  width: PropTypes.number.isRequired,
};

Chart.defaultProps = {
  transform: translate(MARGIN.left, MARGIN.top),
};

export default Chart;
