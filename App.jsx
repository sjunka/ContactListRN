import * as React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ContactsList from './src/screens/ContactsList';
import ContactDetail from './src/screens/ContactDetail';
import FavoritesState from './src/context/FavoritesState';

import HeaderRigth from './src/components/UI/HeaderRigth';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <FavoritesState>
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
            options={({route}) => ({
              title: 'Contacts',
              headerTitleAlign: 'left',
              headerStyle: {
                backgroundColor: '#F6FBF3',
              },
              headerTintColor: '#6798B9',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerRight: () => <HeaderRigth id={route?.params?.item?.id} />,
            })}
            component={ContactDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesState>
  );
};

export default App;
