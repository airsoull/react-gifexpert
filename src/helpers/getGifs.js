const getGifs = async (search) => {
  const apiKey = 'p3sfQopuPVQGPu7z0smMECu1PCRrYjE2';
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=9&q=${encodeURI(search)}`;
  const respuesta = await fetch(url);
  const { data } = await respuesta.json();

  return data.map((img) => (
    {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }
  ));
};

export default getGifs;
