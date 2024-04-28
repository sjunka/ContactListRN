import React, {useState, useEffect} from 'react';
import {FavoritesContext} from './favoritesContext';

export default function FavoritesState({children}) {
  const [favorites, setFavorites] = useState([]);

  console.log('FavoritesState', favorites);

  const toggleFavorite = id => {
    console.log('toggleFavorite', id);

    // setData(prevData =>
    //   prevData.map(item =>
    //     item.id === id ? {...item, isFavorite: !item.isFavorite} : item,
    //   ),
    // );
  };

  return (
    <FavoritesContext.Provider
      value={{favorites, toggleFavorite, setFavorites}}>
      {children}
    </FavoritesContext.Provider>
  );
}
