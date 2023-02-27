import Layout from '@app/constants/Layout';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trackList: {
    width: '100%',
  },
  trackContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
  },
  trackArtwork: {
    width: 32,
    height: 32,
    borderRadius: 1,
  },
  trackArtworkBackgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    ...Layout.artworkZIndex,
  },
  trackArtworkcontrol: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...Layout.artworkControlZIndex,
  },
  trackInfo: {
    flex: 1,
    marginRight: 16,
    marginLeft: 16,
  },
  trackTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  trackArtist: {
    fontSize: 16,
    marginBottom: 4,
  },
  trackDuration: {
    fontSize: 14,
    color: '#666',
  },
  removeButton: {
    fontSize: 16,
    color: 'red',
  },
});

export default styles;
