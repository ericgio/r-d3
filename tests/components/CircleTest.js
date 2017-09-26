import {expect} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';

import {Circle} from '../../src';

const props = {
  cx: 0,
  cy: 0,
  r: 5,
};

describe('<Circle>', () => {
  it('renders an `Circle` component', () => {
    const wrapper = shallow(<Circle {...props} />);
    expect(wrapper.find('.circle')).to.have.length(1);
  });
});
