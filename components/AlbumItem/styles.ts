import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    margin: 10, // Add margin here to apply to the container of each album
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  artwork: {
    flex: 1,
    //position: 'absolute',
    top: 0,
    left: 0,
  },
  albumTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  albumArtist: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  albumReleaseYear: {
    fontSize: 14,
    color: '#666',
  },
  artworkControls: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  playButton: {
    backgroundColor: '#1db954',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  removeButton: {
    backgroundColor: '#e74c3c',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
  },
  trackImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    //marginBottom: 5,
  },
});

export default styles;
