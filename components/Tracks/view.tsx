import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

interface Props {
  onPlay: () => void;
}

const TrackView: React.FC<Props> = ({ onPlay }) => {
  return (
    <TouchableOpacity onPress={onPlay} style={styles.trackView}>
      <Text style={styles.trackName}>It's track</Text>
    </TouchableOpacity>
  );
};

export default TrackView;
