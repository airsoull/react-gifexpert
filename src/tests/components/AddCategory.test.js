import React from 'react';

const { shallow } = require('enzyme');
const { default: AddCategory } = require('../../components/AddCategory');

describe('test for AddCategory component', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('should show component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should change input value', () => {
    const input = wrapper.find('input');
    const value = 'foo-bar';

    input.simulate('change', { target: { value } });
    expect(wrapper.find('input').props().value).toBe(value);
  });

  test('should not post information on submit form', () => {
    const preventDefault = jest.fn();
    wrapper.find('form').simulate('submit', { preventDefault });

    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('should call setCategories and clean inputValue when submit form', () => {
    const value = 'foo-bar';
    const input = wrapper.find('input');
    const preventDefault = jest.fn();

    input.simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault });

    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input.props().value).toBe('');
  });
});
