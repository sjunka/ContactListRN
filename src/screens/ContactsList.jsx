import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';

import useFetchURL from '../hooks/useFetchURL';

import {url} from '../utils/assets/constants';

export default function ContactsList() {
  const {data, loading} = useFetchURL(url);
  const [contacts, setContacts] = useState([]);
  const [contactsMutable, setContactsMutable] = useState([]);

  useEffect(() => {
    if (data) {
      setContacts(data);
      setContactsMutable(data);
    }
  }, [data]);

  if (loading) {
    return (
      <SafeAreaView style={styles.loaderContainer}>
        <Text style={styles.text}>Loading Contacts...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionTop}>{/* <Header /> */}</View>
      <View style={styles.sectionTop2}>
        {/* <TotalPointsCard totalPoints={totalPoints} /> */}
      </View>
      <View style={styles.sectionMiddle}>
        <Text style={styles.textMovimientos}>
          {console.log('🚀 ~ ContactsList ~ contacts:', contacts)}
        </Text>
        {/* <MovementsContainer products={products} navigation={navigation} /> */}
      </View>
      <View style={styles.sectionBottom}>
        {/* <Footer
          filterTrue={filteredMovements}
          filterFalse={filteredMovementsFalse}
          notFiltered={showMovements}
        /> */}
      </View>
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
