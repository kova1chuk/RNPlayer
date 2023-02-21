import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    margin: 10, // Add margin here to apply to the container of each album
    padding: 8,
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
  albumInfo: {
    // flex: 1,
    marginRight: 10,
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
  buttonsContainer: {
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
});

export default styles;
