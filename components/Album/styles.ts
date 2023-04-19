import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '90%',
    backgroundColor: '#fff',
    // alignItems: 'center',
    //justifyContent: 'space-around',
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
  artworkContainer: {
    width: '75%',
    height: 215,
    padding: 10,
    justifyContent: 'flex-end',
  },
  artwork: {
    //position: 'absolute',
    // width: 50,
    // height: 50,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
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
  albumDataContainer: {
    padding: 12,
  },
  albumTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    zIndex: 200,
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
