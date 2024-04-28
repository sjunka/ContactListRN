import {useContext} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import {FavoritesContext} from '../../context/favoritesContext';

export default HeaderRightComponent = ({id}) => {
  const {toggleFavorite} = useContext(FavoritesContext);

  return (
    <TouchableOpacity onPress={() => toggleFavorite(id)}>
      <Text style={styles.emoji}>⭐</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  emoji: {
    fontSize: 20,
    marginRight: 10,
  },
});
