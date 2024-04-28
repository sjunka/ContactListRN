import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {ADDRESS, BIRTHDATE, EMAIL} from '../../utils/assets/constants';

const formatDate = birthdate => {
  const date = new Date(birthdate);
  const options = {month: 'long', day: 'numeric', year: 'numeric'};
  return date.toLocaleDateString('en-US', options);
};

export default function BottomContactDetail({
  address,
  birthdate,
  emailAddress,
}) {
  return (
    <>
      <View>
        <Text style={styles.leftText}>{`${ADDRESS}:`}</Text>
      </View>
      <View style={styles.innerContainerAddress}>
        <Text style={[styles.addressText, styles.pB0]}>{address.street}</Text>
      </View>
      <View style={styles.innerContainerAddress}>
        <Text
          style={
            styles.addressText
          }>{`${address.city}, ${address.state} ${address.zipCode}, ${address.country}`}</Text>
      </View>
      <View style={styles.horizontalLinePhone} />

      <View>
        <Text style={styles.leftText}>{`${BIRTHDATE}:`}</Text>
      </View>
      <View style={styles.innerContainerAddress}>
        <Text style={styles.addressText}>{formatDate(birthdate)}</Text>
      </View>
      <View style={styles.horizontalLinePhone} />

      <View>
        <Text style={styles.leftText}>{`${EMAIL}:`}</Text>
      </View>
      <View style={styles.innerContainerAddress}>
        <Text style={styles.addressText}>{emailAddress}</Text>
      </View>
      <View style={styles.horizontalLinePhone} />
      <View style={{marginBottom: 30}} />
    </>
  );
}

const styles = StyleSheet.create({
  leftText: {
    textAlign: 'left',
    marginRight: 20,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: 'gray',
    fontSize: 12,
    paddingVertical: 10,
  },
  innerContainerAddress: {
    flexDirection: 'row',
  },
  addressText: {
    alignSelf: 'flex-start',
    flex: 1,
    color: 'black',
    fontSize: 16,
    paddingBottom: 20,
    fontWeight: 'bold',
  },
  horizontalLinePhone: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E4E2',
  },
  pB0: {
    paddingBottom: 0,
  },
});
