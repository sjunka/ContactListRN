import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function TopContactDetail({largeImageURL, name, companyName}) {
  return (
    <View>
      <Image source={{uri: largeImageURL}} style={styles.image} />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{name}</Text>
        {companyName ? (
          <Text style={styles.companyText}>{companyName}</Text>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingTop: 20,
  },
  text: {
    color: 'black',
    fontSize: 24,
  },
  image: {
    width: 300,
    height: 300,
  },
  companyText: {
    color: 'gray',
    fontSize: 20,
  },
});
