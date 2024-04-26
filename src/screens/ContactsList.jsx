import React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import useFetchURL from '../hooks/useFetchURL';

import {
  url,
  FAVORITES_CONTACTS,
  NON_FAVORITES_CONTACTS,
} from '../utils/assets/constants';

import Header from '../components/UI/Header';

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
      {/* <Header /> */}
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

  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
  },
});
