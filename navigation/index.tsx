import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import auth from '@react-native-firebase/auth';

import { ColorSchemeName, View, Text } from 'react-native';

import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import Library from '@app/navigation/Library';
import Header from '@app/components/Header';
import useAuth from '@app/hooks/useAuth';
import { getTracks } from '@app/api/firestore/tracks';

const signUp = async (email: string, password: string) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
    console.log('User account created & signed in!');
  } catch (error: any) {
    console.error(error.message);
  }
};

const signIn = async (email: string, password: string) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    console.log('User signed in!');
  } catch (error: any) {
    console.error(error.message);
  }
};

const signOut = async () => {
  try {
    await auth().signOut();
    console.log('User signed out!');
  } catch (error: any) {
    console.error(error.message);
  }
};

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
  const user = useAuth();
  //
  signIn('mail.to.kovalchuk@gmail.com', '123456');
  // signUp('mail.to.kovalchuk@gmail.com', '123456');
  // signOut();

  getTracks({});

  return (
    <>
      <Header />
      {user && <Text>{user.uid}</Text>}
      {user ? (
        <Stack.Navigator>
          {/* <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} /> */}

          <Stack.Screen name="Library" component={Library} options={{ headerShown: false }} />
          <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name="Modal" component={ModalScreen} />
          </Stack.Group>
        </Stack.Navigator>
      ) : (
        <View>
          <Text>Not auth</Text>
        </View>
      )}
    </>
  );
}
