// @flow

import * as d3 from 'd3';

export default function bisect(
  data: Array<Object>,
  position: number,
  accessor: Function
): Object {
  const bisect = d3.bisector(accessor).left;
  const i = bisect(data, position, 1);
  const d0 = data[i - 1];
  const d1 = data[i];
  return d1 && (position - accessor(d0) > accessor(d1) - position) ? d1 : d0;
}
