import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import Library from '@app/navigation/Library';
import Header from '@app/components/Header';

export default function Navigation() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      // theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

export const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <>
      <Header />
      <Stack.Navigator>
        {/* <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} /> */}

        <Stack.Screen name="Library" component={Library} options={{ headerShown: false }} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Modal" component={ModalScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </>
  );
}
