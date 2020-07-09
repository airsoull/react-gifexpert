const getGIFs = async (search, limit = 9) => {
  const apiKey = 'p3sfQopuPVQGPu7z0smMECu1PCRrYjE2';
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=${limit}&q=${encodeURI(search)}`;
  const response = await fetch(url);
  const { data } = await response.json();

  return data.map((img) => (
    {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }
  ));
};

export default getGIFs;
