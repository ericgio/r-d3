import {expect} from 'chai';
import * as d3 from 'd3';
import {shallow} from 'enzyme';
import React from 'react';

import {Symbol} from '../../src';

describe('<Symbol>', () => {
  it('renders a `Symbol` component', () => {
    const wrapper = shallow(<Symbol type={d3.symbolStar} />);
    expect(wrapper.find('.symbol')).to.have.length(1);
  });
});
