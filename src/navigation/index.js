import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderTitle from '../components/HeaderTitle';
import MvpList from '../pages/MvpList';
import MvpDetails from '../pages/MvpDetails';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 100,
          elevation: 0,
        },
      }}>
      <Stack.Screen
        name="MvpList"
        component={MvpList}
        options={{
          headerTitle: () => (
            <HeaderTitle
              title="Pick an MVP"
              subTitle="to see info and timers"
            />
          ),
        }}
      />
      <Stack.Screen
        name="MvpDetails"
        component={MvpDetails}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
