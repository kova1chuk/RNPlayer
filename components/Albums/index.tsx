import { AlbumEntity } from '@app/types/album';
import React from 'react';
import { FlatList } from 'react-native';
import AlbumItem from '../AlbumItem';

import styles from './styles';

type AlbumsProps = {
  albums: AlbumEntity[];
  handlePlayAlbum: (albumId: string) => void;
  handleRemoveAlbum: (albumId: string) => void;
};

const Albums: React.FC<AlbumsProps> = ({ albums, handlePlayAlbum, handleRemoveAlbum }) => {
  const renderItem = ({ item }: { item: AlbumEntity }) => {
    return (
      <AlbumItem
        data={item}
        handlePlayAlbum={handlePlayAlbum}
        handleRemoveAlbum={handleRemoveAlbum}
      />
    );
  };

  return (
    <FlatList
      data={albums}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      style={{ width: '100%' }}
      numColumns={2} // Add this prop to make it display items in two columns
      columnWrapperStyle={styles.columnWrapper} // Add this to style the items in the grid
    />
  );
};

export default Albums;
