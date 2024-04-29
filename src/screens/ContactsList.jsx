import React from 'react';
import {useState, useEffect, useContext, useMemo} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, SectionList, StyleSheet} from 'react-native';

import {Colors} from '../utils/assets/colors';

import SectionListHeader from '../components/SectionListHeader';
import SectionListItem from '../components/SectionListItem';
import useFetchURL from '../hooks/useFetchURL';

import {FavoritesContext} from '../context/favoritesContext';

import {
  url,
  FAVORITES_CONTACTS,
  NON_FAVORITES_CONTACTS,
} from '../utils/assets/constants';

export default function ContactsList({navigation}) {
  const {data, loading} = useFetchURL(url);
  const {favorites, setFavorites} = useContext(FavoritesContext);
  const [contactsMutable, setContactsMutable] = useState([]);

  useEffect(() => {
    if (data) {
      setFavorites(data);
    }
  }, [data]);

  useEffect(() => {
    if (favorites) {
      setContactsMutable(favorites);
    }
  }, [favorites]);

  const favoritesContacts = useMemo(() => {
    return contactsMutable
      .filter(item => item.isFavorite)
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [contactsMutable]);

  const nonFavoritesContacts = useMemo(() => {
    return contactsMutable
      .filter(item => !item.isFavorite)
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [contactsMutable]);

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
    backgroundColor: Colors.White.color,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
  },
  text: {
    fontSize: 24,
    color: Colors.Black.color,
  },
});
