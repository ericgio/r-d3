import {expect} from 'chai';
import {getInnerWidth} from '../src/utils';

describe('getInnerWidth', () => {
  it('calculates the inner width, net of margins', () => {
    expect(getInnerWidth(400)).to.equal(330);

    const margin = {};
    expect(getInnerWidth(400, margin)).to.equal(330);

    margin.left = 0;
    expect(getInnerWidth(400, margin)).to.equal(370);

    margin.right = 0;
    expect(getInnerWidth(400, margin)).to.equal(400);
  });
});
