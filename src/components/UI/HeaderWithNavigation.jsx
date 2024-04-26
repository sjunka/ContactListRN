import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderWithNavigation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={30} color="#000" />
      </TouchableOpacity>
      <Text style={styles.emoji}>⭐</Text>
    </View>
  );
};

const {width} = Dimensions.get('window');
const fontSize = width < 400 ? 18 : 20;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#a6a6a6',
    paddingVertical: 18,
  },
  text: {
    fontSize,
  },
  emoji: {
    fontSize: 24,
  },
});

export default HeaderWithNavigation;
