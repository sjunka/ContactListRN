import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contacts</Text>
    </View>
  );
};

const {width} = Dimensions.get('window');
const fontSize = width < 400 ? 18 : 20;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a6a6a6',
    paddingVertical: 18,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: fontSize,
    color: 'black',
  },
});

export default Header;
