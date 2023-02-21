import { AppDispatch } from '@app/store';
import { getRemoveTracks } from '@app/store/tracks/actions';
import { AppState } from '@app/store/rootReducer';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';

import Tracks from '@app/components/Tracks';
import styles from './styles';

interface TracksScreenProps extends PropsFromRedux {}

const TracksScreen: React.FC<TracksScreenProps> = ({ data, loading, error, removeTracks }) => {
  const handlePlayTrack = (trackId: string) => {
    // Logic for playing the selected track goes here
    // setSelectedTrack(trackId);
    console.log(`Play track: ${trackId}`);
  };

  const handleRemoveTrack = (trackId: string) => {
    // Logic for removing the selected track goes here
    console.log(`Removing track: ${trackId}`);
    removeTracks([trackId]);
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

  return (
    <View style={styles.container}>
      <Tracks
        tracks={data}
        handlePlayTrack={handlePlayTrack}
        handleRemoveTrack={handleRemoveTrack}
      />
    </View>
  );
};

const mapStateToProps = (state: AppState) => {
  const { data, loading, error } = state.tracks;

  return {
    data,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    removeTracks: (ids: string[]) => dispatch(getRemoveTracks(ids)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(TracksScreen);
