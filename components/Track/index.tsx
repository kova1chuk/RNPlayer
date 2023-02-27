import { TrackEntity } from '@app/types/track';
import TrackView from './view';
import React, { useState } from 'react';

type TrackProps = {
  data: TrackEntity;
  handlePlayTrack: (trackId: string) => void;
  handleRemoveTrack: (trackId: string) => void;
};

const Track = ({ data, handlePlayTrack, handleRemoveTrack }: TrackProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <TrackView
      trackData={data}
      isPlaying={isPlaying}
      handlePlayTrack={() => {
        setIsPlaying(!isPlaying);
      }}
      handleRemoveTrack={handleRemoveTrack}
    />
  );
};

export default Track;
