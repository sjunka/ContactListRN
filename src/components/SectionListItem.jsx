import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

const SectionListItem = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ContactDetail', {item})}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../utils/images/UserSmall/User-Icon-Small.png')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.infoContainer}>
          <View style={[styles.column, styles.iconColumn]}>
            <View style={styles.row} />
            <View style={styles.row}>
              {item.isFavorite ? (
                <Text style={styles.icon}>⭐</Text>
              ) : (
                <Text style={styles.icon}></Text>
              )}
            </View>
            <View style={styles.row} />
          </View>
          <View style={styles.column}>
            <View style={styles.row} />
            <View style={styles.row}>
              <Text style={styles.text}>{item.name}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.company}>{item.companyName}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.horizontalLine} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
  },
  imageContainer: {
    flex: 1,
    marginRight: 10,
  },
  image: {
    flex: 1,
  },
  infoContainer: {
    flex: 12,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  row: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderBottomColor: '#cccccc',
  },
  iconColumn: {
    flex: 0.3,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginLeft: 10,
  },
  icon: {
    marginBottom: 22,
    paddingRight: 10,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E4E2',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 14,
    color: 'gray',
  },
});

export default SectionListItem;
