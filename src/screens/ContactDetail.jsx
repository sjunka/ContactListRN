import {View, Text} from 'react-native';
import React from 'react';

export default function ContactDetail({route}) {
  return (
    <View>
      <Text>ContactDetail</Text>
      <Text>{JSON.stringify(route)}</Text>
    </View>
  );
}
