import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  artworkZIndex: {
    zIndex: 50,
  },
  artworkControlZIndex: {
    zIndex: 100,
  },
};
