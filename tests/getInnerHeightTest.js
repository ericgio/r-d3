import {expect} from 'chai';
import {getInnerHeight} from '../src/utils';

describe('getInnerHeight', () => {
  it('calculates the inner height, net of margins', () => {
    expect(getInnerHeight(400)).to.equal(350);
    expect(getInnerHeight(400, {})).to.equal(350);
    expect(getInnerHeight(400, {bottom: 0})).to.equal(380);
    expect(getInnerHeight(400, {bottom: 0, top: 0})).to.equal(400);
  });
});
