import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({ title, url }) => (
  <div className="card">
    <div className="image-card">
      <img src={url} alt={title} />
    </div>
    <p>{title}</p>
  </div>
);

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifGridItem;
