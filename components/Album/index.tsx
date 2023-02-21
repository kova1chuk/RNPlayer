import { AlbumEntity } from '@app/types/album';
import AlbumView from './view';

type AlbumProps = {
  data: AlbumEntity;
  handlePlayAlbum: (albumId: string) => void;
  handleRemoveAlbum: (albumId: string) => void;
};

const Album = ({ data, handlePlayAlbum, handleRemoveAlbum }: AlbumProps) => {
  return (
    <AlbumView
      albumData={data}
      handlePlayAlbum={handlePlayAlbum}
      handleRemoveAlbum={handleRemoveAlbum}
    />
  );
};

export default Album;
