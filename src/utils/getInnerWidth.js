// @flow

import {MARGIN} from '../constants/margin';

export default function getInnerWidth(
  width: number,
  margin?: {left: number, right: number},
): number {
  margin = {...MARGIN, ...margin};
  return width - margin.left - margin.right;
}
