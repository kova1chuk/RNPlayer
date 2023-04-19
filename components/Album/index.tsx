import { AlbumEntity } from '@app/types/album';
import AlbumView from './view';
import { TrackEntity } from '@app/types/track';

type AlbumProps = {
  // data: AlbumEntity;
  // handlePlayAlbum: (albumId: string) => void;
  // handleRemoveAlbum: (albumId: string) => void;
  albumName: string;
  tracks: TrackEntity[];
};

const Album = ({ albumName, tracks }: AlbumProps) => {
  return (
    <AlbumView
      // albumData={data}
      // handlePlayAlbum={handlePlayAlbum}
      // handleRemoveAlbum={handleRemoveAlbum}
      albumName={albumName}
      tracks={tracks}
    />
  );
};

export default Album;
