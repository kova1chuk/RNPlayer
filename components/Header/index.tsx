import useColorScheme from '@app/hooks/useColorScheme';
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Header = () => {
  const [theme, setTheme] = useState(useColorScheme());

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme === 'light' ? 'white' : 'black',
        height: 60,
        paddingHorizontal: 16,
      }}
    >
      <Text style={{ color: theme === 'light' ? 'black' : 'white' }}>RNPlayer</Text>
      <TouchableOpacity onPress={handleThemeChange}>
        <Text style={{ color: theme === 'light' ? 'black' : 'white' }}>Change Theme</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
