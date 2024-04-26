import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, SectionList, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';

import useFetchURL from '../hooks/useFetchURL';

import {
  url,
  FAVORITES_CONTACTS,
  NON_FAVORITES_CONTACTS,
} from '../utils/assets/constants';

export default function ContactsList({navigation}) {
  const {data, loading} = useFetchURL(url);
  const [contacts, setContacts] = useState([]);
  const [contactsMutable, setContactsMutable] = useState([]);

  useEffect(() => {
    if (data) {
      setContacts(data);
      setContactsMutable(data);
    }
  }, [data]);

  const favoritesContacts = contactsMutable
    .filter(item => item.isFavorite)
    .sort((a, b) => a.name.localeCompare(b.name));

  const nonFavoritesContacts = contactsMutable
    .filter(item => !item.isFavorite)
    .sort((a, b) => a.name.localeCompare(b.name));

  const ContactListData = [
    {
      title: FAVORITES_CONTACTS,
      data: favoritesContacts,
    },
    {
      title: NON_FAVORITES_CONTACTS,
      data: nonFavoritesContacts,
    },
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ContactDetail', {item})}>
      <View key={item.id}>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({section: {title}}) => (
    <View>
      <Text>{title}</Text>
    </View>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.loaderContainer}>
        <Text style={styles.text}>Loading Contacts...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={ContactListData}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
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
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#F8F8F8',
  },
  sectionTop: {
    flexBasis: '10%',
    paddingHorizontal: 20,
  },
  sectionTop2: {
    flexBasis: '25%',
    paddingHorizontal: 20,
  },
  sectionMiddle: {
    flexBasis: '55%',
    paddingHorizontal: 20,
  },
  sectionBottom: {
    flexBasis: '16%',
  },
  textMovimientos: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#9B9898',
    marginTop: 20,
    fontFamily: 'Avenir',
  },
});
