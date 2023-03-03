import { AlbumEntity } from '@app/types/album';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import PlayIcon from '@app/assets/images/svg/playIcon.svg';
import styles from './styles';

type AlbumViewProps = {
  albumData: AlbumEntity;
  handlePlayAlbum: (albumId: string) => void;
  handleRemoveAlbum: (albumId: string) => void;
};

const AlbumView = ({ albumData, handlePlayAlbum, handleRemoveAlbum }: AlbumViewProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.artwork}>
        <Image
          source={{
            uri: 'https://rare-gallery.com/thumbs/550520-nirvana-album.jpg',
          }}
          style={styles.trackImage}
        />
        <View style={styles.artworkControls}>
          <TouchableOpacity style={styles.playButton} onPress={() => handlePlayAlbum(albumData.id)}>
            <PlayIcon height={16} width={16} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => handleRemoveAlbum(albumData.id)}
          >
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View> {/*albumInfo*/}
        <Text style={styles.albumTitle}>{albumData.title}</Text>
        <Text style={styles.albumArtist}>{albumData.artist}</Text>
        <Text style={styles.albumReleaseYear}>{albumData.releaseYear}</Text>
      </View>
    </View>
  );
};

export default AlbumView;
