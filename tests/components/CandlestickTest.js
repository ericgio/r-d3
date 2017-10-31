import {expect} from 'chai';
import * as d3 from 'd3';
import {shallow} from 'enzyme';
import React from 'react';

import {Candlestick} from '../../src';

const data = [{
  close: 101,
  date: new Date(),
  high: 105,
  low: 95,
  open: 100,
}];

const x = d3.scaleTime()
  .domain(d3.extent(data, (d) => d.date))
  .rangeRound([0, 100]);

const props = {
  ...data[0],
  width: 5,
  x,
  y: (y) => y,
};

describe('<Candlestick>', () => {
  it('renders a `Candlestick` component', () => {
    const wrapper = shallow(<Candlestick {...props} />);
    expect(wrapper.find('.candlestick')).to.have.length(1);
  });
});
