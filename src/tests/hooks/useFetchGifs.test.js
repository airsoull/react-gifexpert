import '@testing-library/jest-dom';

const { renderHook } = require('@testing-library/react-hooks');
const { default: useFetchGifs } = require('../../hooks/useFetchGifs');

describe('test for useFetchGifs hook', () => {
  test('should return initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(''));
    const { images, loading } = result.current;
    await waitForNextUpdate();

    expect(images).toEqual([]);
    expect(loading).toBe(true);
  });

  test('should return list of images and false loading', async () => {
    const limit = 5;
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('foo-bar', limit));
    await waitForNextUpdate();

    const { images, loading } = result.current;
    expect(images.length).toEqual(limit);
    expect(loading).toBe(false);
  });
});
