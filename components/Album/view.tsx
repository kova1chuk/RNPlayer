import { AlbumEntity } from '@app/types/album';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

import PlayIcon from '@app/assets/images/svg/playIconSVG';
import styles from './styles';
import { TrackEntity } from '@app/types/track';
import Tracks from '../Tracks';

type AlbumViewProps = {
  // albumData: AlbumEntity;
  // handlePlayAlbum: (albumId: string) => void;
  // handleRemoveAlbum: (albumId: string) => void;
  albumName: string;
  tracks: TrackEntity[];
};
// albumData, handlePlayAlbum, handleRemoveAlbum
const AlbumView = ({ albumName, tracks }: AlbumViewProps) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.artworkContainer}>
        <Image
          source={{
            uri: 'https://rare-gallery.com/thumbs/550520-nirvana-album.jpg',
          }}
          style={styles.artwork}
        />
        <View style={styles.artworkControls}>
          <TouchableOpacity style={styles.playButton} onPress={() => {}}>
            <PlayIcon height={16} width={16} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.removeButton} onPress={() => {}}>
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.albumDataContainer}>
        <Text style={styles.albumTitle}>{albumName}</Text>
        <Text style={styles.albumArtist}>Artist</Text>
        <Text>{tracks.length} Tracks</Text>
        <Tracks tracks={tracks} handlePlayTrack={() => {}} handleRemoveTrack={() => {}} />
      </View>
      {/* <View style={styles.albumInfo}>
        <Text style={styles.albumTitle}>{albumData.title}</Text>
        <Text style={styles.albumArtist}>{albumData.artist}</Text>
        <Text style={styles.albumReleaseYear}>{albumData.releaseYear}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.playButton} onPress={() => handlePlayAlbum(albumData.id)}>
          <PlayIcon height={16} width={16} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => handleRemoveAlbum(albumData.id)}
        >
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View> */}
    </ScrollView>
  );
};

export default AlbumView;
