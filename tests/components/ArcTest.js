import {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';

import {Arc} from '../../src';

const props = {
  endAngle: 90,
  outerRadius: 20,
  startAngle: 0,
};

describe('<Arc>', () => {
  it('renders an `Arc` component', () => {
    const wrapper = shallow(<Arc {...props} />);
    expect(wrapper.find('.arc')).to.have.length(1);
  });
});
