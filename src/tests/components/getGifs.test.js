const { default: getGIFs } = require("../../helpers/getGifs");

describe('Test for getGIFs fetch', () => {
  test('should return 9 elements by default', async () => {
    const gifs = await getGIFs('test');
    expect(gifs.length).toBe(9);
  });

  test('should return 5 elements', async () => {
    const limit = 5;
    const gifs = await getGIFs('test', limit);
    expect(gifs.length).toBe(limit);
  });
});
