import React from 'react';
import PropTypes from 'prop-types';
import useFetchGIFs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  const { images, loading } = useFetchGIFs(category);
  return (
    <>
      <h3 className="mt-40">{category}</h3>
      <div className="card-grid animate__animated animate__zoomIn">
        {loading && <p>Loading...</p>}
        {
          images.map(({ id, title, url }) => (
            <GifGridItem
              key={id}
              title={title}
              url={url}
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
