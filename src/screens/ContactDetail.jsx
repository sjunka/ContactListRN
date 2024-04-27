import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';

export default function ContactDetail({route, navigation}) {
  const {
    largeImageURL,
    name,
    emailAddress,
    companyName,
    birthdate,
    phone,
    address,
  } = route.params.item;
  console.log('🚀 ~ ContactDetail ~ largeImageURL:', largeImageURL);
  console.log('🚀 ~ ContactDetail ~ address:', address);
  console.log('🚀 ~ ContactDetail ~ phone:', phone);
  console.log('🚀 ~ ContactDetail ~ birthdate:', birthdate);
  console.log('🚀 ~ ContactDetail ~ companyName:', companyName);
  console.log('🚀 ~ ContactDetail ~ emailAddress:', emailAddress);
  console.log('🚀 ~ ContactDetail ~ name:', name);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.containerTop}>
          <View style={styles.imageContainer}>
            <Image source={{uri: largeImageURL}} style={styles.image} />
            <View style={styles.textWrapper}>
              <Text style={styles.text}>{name}</Text>
              {companyName ? (
                <Text style={styles.text}>{companyName}</Text>
              ) : null}
            </View>
          </View>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.containerMid}>
          <View>
            <Text style={styles.leftText}>Phone</Text>
          </View>

          <View style={styles.innerContainer}>
            <Text style={styles.phoneText}>{phone.home}</Text>
            <Text style={styles.mobileText}>Home</Text>
          </View>
          <View style={styles.horizontalLinePhone} />

          <View style={styles.innerContainer}>
            <Text style={styles.phoneText}>{phone.mobile}</Text>
            <Text style={styles.mobileText}>Mobile</Text>
          </View>
          <View style={styles.horizontalLinePhone} />

          <View style={styles.innerContainer}>
            <Text style={styles.phoneText}>{phone.work}</Text>
            <Text style={styles.mobileText}>Work</Text>
          </View>
          <View style={styles.horizontalLinePhone} />

          <View style={styles.innerContainer}>
            <Text style={styles.phoneText}>{phone.work}</Text>
            <Text style={styles.mobileText}>Work</Text>
          </View>
          <View style={styles.horizontalLinePhone} />

          <View>
            <Text style={styles.leftText}>Address</Text>
          </View>
          <View style={styles.innerContainerAddress}>
            <Text style={styles.addressText}>{address.street}</Text>
          </View>
          <View style={styles.innerContainerAddress}>
            <Text
              style={
                styles.addressText
              }>{`${address.city}, ${address.state} ${address.zipCode}, ${address.country}`}</Text>
          </View>
          <View style={styles.horizontalLinePhone} />

          <View>
            <Text style={styles.leftText}>Birthdate</Text>
          </View>
          <View style={styles.innerContainerAddress}>
            <Text style={styles.addressText}>{birthdate}</Text>
          </View>
          <View style={styles.horizontalLinePhone} />

          <View>
            <Text style={styles.leftText}>Email</Text>
          </View>
          <View style={styles.innerContainerAddress}>
            <Text style={styles.addressText}>{emailAddress}</Text>
          </View>
          <View style={styles.horizontalLinePhone} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerTop: {
    backgroundColor: 'white', // You can change the colors as per your requirement
    justifyContent: 'center',
    alignItems: 'center',
    flex: 4,
    paddingTop: 40,
    paddingBottom: 30,
  },
  containerMid: {
    backgroundColor: 'salmon', // You can change the colors as per your requirement
    justifyContent: 'flex-start',
    flex: 6,
    marginHorizontal: 20,
  },
  textWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
  horizontalLine: {
    borderBottomWidth: 10,
    // borderBottomColor: '#E5E4E2',
    borderBottomColor: 'red',
    marginHorizontal: 20,
  },

  leftText: {
    textAlign: 'left',
    marginRight: 20, // Adjust spacing as needed
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Aligns children with space between them
  },
  innerContainerAddress: {
    flexDirection: 'row',
    // alignItems: 'space-between', // Aligns children with space between them
    // flexGrow: 1
  },
  addressText: {
    alignSelf: 'flex-start', // Aligns text to the start (left)
    flex: 1,
    color: 'black',
    fontSize: 20,
  },
  phoneText: {
    alignSelf: 'flex-start', // Aligns text to the start (left)
  },
  mobileText: {
    alignSelf: 'flex-end', // Aligns text to the end (right)
  },
  horizontalLinePhone: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});
