import Albums from '@app/components/Albums';
import { AppDispatch } from '@app/store';
import { getRemoveAlbums } from '@app/store/albums/actions';
import { AppState } from '@app/store/rootReducer';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';

import styles from './styles';

interface AlbumsScreenProps extends PropsFromRedux {}

const AlbumsScreen: React.FC<AlbumsScreenProps> = ({ data, loading, error, removeAlbums }) => {
  const handlePlayAlbum = (albumId: string) => {
    // Logic for playing the selected album goes here
    // setSelectedAlbum(albumId);
    console.log(`Play album: ${albumId}`);
  };

  const handleRemoveAlbum = (albumId: string) => {
    // Logic for removing the selected album goes here
    console.log(`Removing album: ${albumId}`);
    removeAlbums([albumId]);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  // console.log('albums data', data);

  return (
    <View style={styles.container}>
      <Albums
        albums={data}
        handlePlayAlbum={handlePlayAlbum}
        handleRemoveAlbum={handleRemoveAlbum}
      />
    </View>
  );
};

const mapStateToProps = (state: AppState) => {
  const { data, loading, error } = state.albums;

  return {
    data,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    removeAlbums: (ids: string[]) => dispatch(getRemoveAlbums(ids)),
  };
};

// export default connect(mapStateToProps, mapDispatchToProps)(AlbumsScreen);

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(AlbumsScreen);
