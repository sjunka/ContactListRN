import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

import HeaderWithNavigation from '../components/UI/HeaderWithNavigation';

export default function ContactDetail({route}) {
  return (
    <SafeAreaView style={styles.container}>
      {/* <HeaderWithNavigation /> */}
      <Text>{JSON.stringify(route)}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#F8F8F8',
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
  },
});
