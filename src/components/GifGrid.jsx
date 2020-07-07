import React from 'react';
import PropTypes from 'prop-types';
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  const { images, loading } = useFetchGifs(category);
  return (
    <>
      <h3 className="mt-40">{category}</h3>
      <div className="card-grid animate__animated animate__zoomIn">
        {loading && <p>Cargando...</p>}
        {
          images.map((image) => (
            <GifGridItem
              key={image.id}
              {...image}
            />
          ))
        }
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
