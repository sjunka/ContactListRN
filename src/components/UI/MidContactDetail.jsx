import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {PHONE, HOME, MOBILE, WORK} from '../../utils/assets/constants';

const formatPhoneNumber = phoneNumber => {
  const areaCode = phoneNumber.substring(0, 3);
  const firstPart = phoneNumber.substring(4, 7);
  const secondPart = phoneNumber.substring(8);
  return `(${areaCode}) ${firstPart}-${secondPart}`;
};

export default function MidContactDetail({phone}) {
  return (
    <>
      {phone.home ? (
        <>
          <View>
            <Text style={styles.leftText}>{`${PHONE}:`}</Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.phoneText}>
              {formatPhoneNumber(phone.home)}
            </Text>
            <Text style={styles.mobileText}>{HOME}</Text>
          </View>
          <View style={styles.horizontalLinePhone} />
        </>
      ) : null}

      {phone.mobile ? (
        <>
          <View>
            <Text style={styles.leftText}>{`${PHONE}:`}</Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.phoneText}>
              {formatPhoneNumber(phone.mobile)}
            </Text>
            <Text style={styles.mobileText}>{MOBILE}</Text>
          </View>
          <View style={styles.horizontalLinePhone} />
        </>
      ) : null}

      {phone.work ? (
        <>
          <View>
            <Text style={styles.leftText}>{`${PHONE}:`}</Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.phoneText}>
              {formatPhoneNumber(phone.work)}
            </Text>
            <Text style={styles.mobileText}>{WORK}</Text>
          </View>
          <View style={styles.horizontalLinePhone} />
        </>
      ) : null}
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
    paddingTop: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 20,
  },
  phoneText: {
    alignSelf: 'flex-start',
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mobileText: {
    alignSelf: 'flex-end',
    textTransform: 'capitalize',
    color: 'gray',
    fontSize: 16,
  },
  horizontalLinePhone: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E4E2',
  },
});
