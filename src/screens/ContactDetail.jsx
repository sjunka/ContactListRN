import {View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

import TopContactDetail from '../components/UI/TopContactDetail';
import MidContactDetail from '../components/UI/MidContactDetail';
import BottomContactDetail from '../components/UI/BottomContactDetail';

export default function ContactDetail({route}) {
  const {
    largeImageURL,
    name,
    emailAddress,
    companyName,
    birthdate,
    phone,
    address,
  } = route.params.item;

  return (
    <SafeAreaView>
      <ScrollView style={styles.bgC}>
        <View style={styles.containerTop}>
          <TopContactDetail
            largeImageURL={largeImageURL}
            name={name}
            companyName={companyName}
          />
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.containerMid}>
          <MidContactDetail phone={phone} />
          <BottomContactDetail
            address={address}
            birthdate={birthdate}
            emailAddress={emailAddress}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerTop: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 4,
    paddingTop: 40,
    paddingBottom: 30,
  },
  containerMid: {
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    flex: 6,
    marginHorizontal: 20,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E4E2',
    marginHorizontal: 20,
  },
  bgC: {
    backgroundColor: 'white',
  },
});
