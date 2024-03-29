import { TrackEntity } from '@app/types/track';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import PlayIcon from '@app/assets/images/svg/playIconSVG';
import styles from './styles';

type TrackViewProps = {
  isPlaying: boolean;
  trackData: TrackEntity;
  handlePlayTrack: (trackId: string) => void;
  handleRemoveTrack: (trackId: string) => void;
};

const TrackView = ({ trackData, handlePlayTrack, handleRemoveTrack }: TrackViewProps) => {
  return (
    <View style={styles.trackContainer}>
      <TouchableOpacity style={styles.trackArtwork} onPress={() => handlePlayTrack(trackData.id)}>
        <Image
          source={{
            uri: 'https://rare-gallery.com/thumbs/550520-nirvana-album.jpg',
          }}
          style={styles.trackArtworkBackgroundImage}
        />
        <View style={styles.trackArtworkcontrol}>
          <PlayIcon width={24} height={24} />
        </View>
      </TouchableOpacity>
      <View style={styles.trackInfo}>
        <Text style={styles.trackTitle}>{trackData.title}</Text>
        <Text style={styles.trackArtist}>{trackData.artist}</Text>
        <Text style={styles.trackDuration}>{trackData.duration}</Text>
      </View>
      <TouchableOpacity onPress={() => handleRemoveTrack(trackData.id)}>
        <Text style={styles.removeButton}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TrackView;
