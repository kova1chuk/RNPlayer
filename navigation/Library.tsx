import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import ButtonTabs from '@app/components/ButtonTabs';
import AlbumsScreen from '../screens/AlbumsScreen';
import ControlPanel from '@app/components/ControlPanel';
import TracksScreen from '@app/screens/TracksScreen';
import AlbumScreen from '@app/screens/AlbumScreen';
import { LibraryStackParamList } from '@app/types';

type LibraryNavigationProp = NativeStackNavigationProp<LibraryStackParamList>;

interface Props {
  navigation: LibraryNavigationProp;
}

export const Stack = createNativeStackNavigator();

function Library({ navigation }: Props) {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Tracks" component={TracksScreen} />
        <Stack.Screen name="Albums" component={AlbumsScreen} />
        <Stack.Screen name="Album" component={AlbumScreen} />
      </Stack.Navigator>
      <ControlPanel duration={0} />
      <ButtonTabs
        tabs={[
          { label: 'Tracks', iconName: 'code' },
          { label: 'Albums', iconName: 'th' },
          { label: 'Album', iconName: 'circle' },
        ]}
        activeTab={''} //TODO: get current route
        onChangeTab={(label: string) => {
          try {
            navigation.navigate(label as keyof LibraryStackParamList);
          } catch (error: any) {
            console.error('Invalid tab name:', error);
          }
        }}
      />
    </>
  );
}

export default Library;
