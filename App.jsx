import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ContactsList from './src/screens/ContactsList';
import ContactDetail from './src/screens/ContactDetail';
import FavoritesState from './src/context/FavoritesState';

import HeaderRigth from './src/components/UI/HeaderRigth';
import {Colors} from './src/utils/assets/colors';

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
                backgroundColor: Colors.White.color,
              },
              headerTintColor: Colors.Black.color,
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
                backgroundColor: Colors.White.color,
              },
              headerTintColor: Colors.Blue.color,
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
