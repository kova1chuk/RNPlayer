import { TrackEntity } from '@app/types/track';
import React from 'react';
import { FlatList } from 'react-native';
import Track from '../Track';

import styles from './styles';

type TracksProps = {
  tracks: TrackEntity[];
  handlePlayTrack: (trackId: string) => void;
  handleRemoveTrack: (trackId: string) => void;
};

const Tracks: React.FC<TracksProps> = ({ tracks, handlePlayTrack, handleRemoveTrack }) => {
  const renderItem = ({ item }: { item: TrackEntity }) => {
    return (
      <Track data={item} handlePlayTrack={handlePlayTrack} handleRemoveTrack={handleRemoveTrack} />
    );
  };

  return (
    <FlatList
      data={tracks}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      style={{ width: '100%' }}
    />
  );
};

export default Tracks;
