// @flow

import {MARGIN} from '../constants/margin';

export default function getInnerHeight(
  height: number,
  margin?: {bottom: number, top: number},
): number {
  margin = {...MARGIN, ...margin};
  return height - margin.top - margin.bottom;
}
