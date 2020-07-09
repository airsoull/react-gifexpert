import React from 'react';

const { shallow } = require('enzyme');
const { default: GifGridItem } = require('../../components/GifGridItem');

describe('Test for <GifGidItem/> component', () => {
  const title = 'foo-bar';
  const url = 'http://www.example.com/img.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('should show component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have a paragraph with the text', () => {
    expect(wrapper.find('p').text().trim()).toBe(title);
  });

  test('should have an img with url and title', () => {
    const imgProps = wrapper.find('img').get(0).props;
    expect(imgProps.src).toBe(url);
    expect(imgProps.alt).toBe(title);
  });

  test('should have a div with "card" class', () => {
    expect(wrapper.first('div').props().className).toBe('card');
  });
});
