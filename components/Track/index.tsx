import { TrackEntity } from '@app/types/track';
import TrackView from './view';

type TrackProps = {
  data: TrackEntity;
  handlePlayTrack: (trackId: string) => void;
  handleRemoveTrack: (trackId: string) => void;
};

const Track = ({ data, handlePlayTrack, handleRemoveTrack }: TrackProps) => {
  return (
    <TrackView
      trackData={data}
      handlePlayTrack={handlePlayTrack}
      handleRemoveTrack={handleRemoveTrack}
    />
  );
};

export default Track;
