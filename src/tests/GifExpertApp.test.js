import React from 'react';

const { shallow } = require('enzyme');
const { default: GifExpertApp } = require('../GifExpertApp');

describe('test for GifExpertApp component', () => {

  const wrapper = shallow(<GifExpertApp />);

  test('should show the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should show a list of categories', () => {
    expect(wrapper.find('GifGrid').length).toBe(3);
  });
});
