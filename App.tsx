import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import store from './store';

export default function App() {
  const isLoadingComplete = useCachedResources();
  // const colorScheme = useColorScheme();

  const colorScheme = useColorScheme();

  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        {' '}
        <ThemeProvider theme={theme}>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </ThemeProvider>
      </Provider>
    );
  }
}
