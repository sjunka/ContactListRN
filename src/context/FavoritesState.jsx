import React, {useState, useCallback} from 'react';
import {FavoritesContext} from './favoritesContext';

export default function FavoritesState({children}) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = useCallback(
    id => {
      setFavorites(prevData => {
        return prevData.map(item => {
          if (item.id === id) {
            return {...item, isFavorite: !item.isFavorite};
          } else {
            return item;
          }
        });
      });
    },
    [setFavorites],
  );

  return (
    <FavoritesContext.Provider
      value={{favorites, toggleFavorite, setFavorites}}>
      {children}
    </FavoritesContext.Provider>
  );
}
