import {expect} from 'chai';
import * as d3 from 'd3';
import {shallow} from 'enzyme';
import React from 'react';

import {Area} from '../../src';

const data = [107, 125, 156, 210, 184, 107, 125, 156, 210, 184, 30, 24];

const height = 500;
const width = 960;

const x = d3.scaleBand()
  .domain([0, data.length - 1])
  .rangeRound([0, width]);

const y = d3.scaleLinear()
  .domain([0, d3.max(data)])
  .rangeRound([height, 0]);

const props = {
  data,
  x: (d, i) => x(i),
  y0: height,
  y1: d => y(d),
};

describe('<Area>', () => {
  it('renders an `Area` component', () => {
    const wrapper = shallow(<Area {...props} />);
    expect(wrapper.find('.area')).to.have.length(1);
  });
});
