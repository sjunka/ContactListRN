import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function SectionListHeader({title}) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.textHeader}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  sectionHeader: {
    backgroundColor: '#F8F8F8',
    padding: 10,
  },
});
