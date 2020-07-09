import { useState, useEffect } from 'react';
import getGifs from '../helpers/getGifs';

const useFetchGifs = (category, limit = 9) => {
  const [state, setState] = useState({
    images: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category, limit).then((imgs) => setState({
      images: imgs,
      loading: false,
    }));
  }, [category, limit]);

  return state;
};

export default useFetchGifs;
