import React from 'react';
import useFetchGifs from '../../hooks/useFetchGifs';

const { shallow } = require('enzyme');
const { default: GifGrid } = require('../../components/GifGrid');

jest.mock('../../hooks/useFetchGifs');

describe('test for GifGrid component', () => {
  test('should show the component correctly', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      loading: true,
    });

    const category = 'foo-bar';
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should show items when images are loads', () => {
    const images = [
      {
        id: 1,
        title: 'foo-bar',
        url: 'http://www.example.com/img.jpg',
      },
      {
        id: 2,
        title: 'foo-bar',
        url: 'http://www.example.com/img.jpg',
      },
    ];

    useFetchGifs.mockReturnValue({
      images,
      loading: false,
    });

    const category = 'foo-bar';
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(images.length);
  });
});
