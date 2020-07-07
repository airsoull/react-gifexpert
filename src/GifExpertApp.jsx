import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    'Hunter X Hunter',
    'One Piece',
    'boku no hero academia',
  ]);

  return (
    <>
      <h2> GifExpert! </h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category}
          />
        ))
      }
    </>
  );
};

export default GifExpertApp;
