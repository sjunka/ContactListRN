import {useContext, useState, useEffect, useMemo, useCallback} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  PixelRatio,
} from 'react-native';

import {
  starSmallTrue,
  starMedTrue,
  starBigTrue,
  starSmallFalse,
  starMedFalse,
  starBigFalse,
} from '../../utils/assets/constants';
import {FavoritesContext} from '../../context/favoritesContext';

export default HeaderRightComponent = ({id}) => {
  const [showIcon, setShowIcon] = useState(isFavorite);
  const [trueStarImage, setTrueStarImage] = useState(null);
  const [falseStarImage, setFalseStarImage] = useState(null);

  const {favorites, toggleFavorite} = useContext(FavoritesContext);

  const isFavorite = useCallback(() => {
    return favorites.find(favorite => favorite.id === id)?.isFavorite;
  }, [favorites, id]);

  const pixelRatio = PixelRatio.get();

  useMemo(() => {
    if (pixelRatio <= 1.5) {
      setTrueStarImage(starSmallTrue);
      setFalseStarImage(starSmallFalse);
    } else if (pixelRatio <= 2.5) {
      setTrueStarImage(starMedTrue);
      setFalseStarImage(starMedFalse);
    } else {
      setTrueStarImage(starBigTrue);
      setFalseStarImage(starBigFalse);
    }
  }, [pixelRatio]);

  const FavoriteStar = () => {
    return (
      <Image
        source={trueStarImage}
        style={{width: 20, height: 20, marginBottom: 30}}
      />
    );
  };

  const FalsyFavoriteStar = () => {
    return (
      <Image
        source={falseStarImage}
        style={{width: 20, height: 20, marginBottom: 30}}
      />
    );
  };

  useEffect(() => {
    setShowIcon(isFavorite);
  }, [isFavorite]);

  return (
    <TouchableOpacity onPress={() => toggleFavorite(id)}>
      <Text style={styles.star}>
        {showIcon ? <FavoriteStar /> : <FalsyFavoriteStar />}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  star: {
    fontSize: 30,
    marginRight: 10,
  },
});
