import React, {useState} from 'react';
import {FavoritesContext} from './favoritesContext';

export default function FavoritesState({children}) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = id => {
    setFavorites(prevData => {
      return prevData.map(item => {
        if (item.id === id) {
          return {...item, isFavorite: !item.isFavorite};
        } else {
          return item;
        }
      });
    });
  };

  return (
    <FavoritesContext.Provider
      value={{favorites, toggleFavorite, setFavorites}}>
      {children}
    </FavoritesContext.Provider>
  );
}
