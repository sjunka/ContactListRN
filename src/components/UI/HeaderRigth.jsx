import {useContext, useState, useEffect} from 'react';
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
  const {favorites, toggleFavorite} = useContext(FavoritesContext);
  const isFavorite = favorites.find(favorite => favorite.id === id)?.isFavorite;

  const pixelRatio = PixelRatio.get();

  let trueStarImage;
  let falseStarImage;

  if (pixelRatio <= 1.5) {
    trueStarImage = starSmallTrue;
    falseStarImage = starSmallFalse;
  } else if (pixelRatio <= 2.5) {
    trueStarImage = starMedTrue;
    falseStarImage = starMedFalse;
  } else {
    trueStarImage = starBigTrue;
    falseStarImage = starBigFalse;
  }

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
