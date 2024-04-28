import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import RemoteImageWithFallback from './RemoteImageWithFallback';

import altImage from '../../utils/images/UserLarge/UserLarge.png';

export default function TopContactDetail({largeImageURL, name, companyName}) {
  return (
    <View>
      <RemoteImageWithFallback
        source={{uri: largeImageURL}}
        fallbackSource={altImage}
        style={styles.image}
      />
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
