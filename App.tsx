import * as React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ContactsList from './src/screens/ContactsList';
import ContactDetail from './src/screens/ContactDetail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Contacts"
          component={ContactsList}
          options={{
            title: 'Contacts',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#F6FBF3',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ContactDetail"
          options={{
            title: 'Contacts',
            headerTitleAlign: 'left',
            headerStyle: {
              backgroundColor: '#F6FBF3',
            },
            headerTintColor: '#6798B9',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => console.log('Star pressed')}>
                <Text style={styles.emoji}>⭐</Text>
              </TouchableOpacity>
            ),
          }}
          component={ContactDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  emoji: {
    fontSize: 24,
  },
});

export default App;
