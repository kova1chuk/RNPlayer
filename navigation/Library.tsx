import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ButtonTabs from '@app/components/ButtonTabs';
import AlbumsScreen from '../screens/AlbumsScreen';
import ControlPanel from '@app/components/ControlPanel';
import TracksScreen from '@app/screens/TracksScreen';

export const Stack = createNativeStackNavigator();

function Library({ navigation }) {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Tracks" component={TracksScreen} />
        <Stack.Screen name="Albums" component={AlbumsScreen} />
      </Stack.Navigator>
      <ControlPanel duration={0} />
      <ButtonTabs
        tabs={[
          { label: 'Tracks', iconName: 'code' },
          { label: 'Albums', iconName: 'th' },
        ]}
        activeTab={''} //TODO: get current route
        onChangeTab={function (label: string): void {
          navigation.navigate(label);
        }}
      />
    </>
  );
}

export default Library;
