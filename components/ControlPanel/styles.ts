import { StyleSheet } from 'react-native';

const ControlPanelStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  control: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
  },
  progressBar: {
    height: 5,
    width: '75%',
    backgroundColor: '#ddd',
    borderRadius: 2,
    marginHorizontal: 10,
  },
  progressFill: {
    height: '100%',
    backgroundColor: 'blue',
    borderRadius: 2,
  },
  bottomControlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomControl: {
    fontSize: 14,
    color: '#666',
    marginHorizontal: 10,
  },
});

export default ControlPanelStyles;
