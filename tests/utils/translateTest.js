import {expect} from 'chai';

import {translate} from '../../src/utils';

describe('d3Utils', () => {
  it('returns a `translate` string value', () => {
    expect(translate(99, 234)).to.equal('translate(99, 234)');
  });
});
