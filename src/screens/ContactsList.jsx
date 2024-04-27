import React from 'react';
import {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import SectionListHeader from '../components/SectionListHeader';
import useFetchURL from '../hooks/useFetchURL';

import SectionListItem from '../components/SectionListItem';

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
    <SectionListItem item={item} navigation={navigation} />
  );

  const renderSectionHeader = ({section: {title}}) => (
    <SectionListHeader title={title} />
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
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
  },

  emoji: {
    fontSize: 24,
  },
});
