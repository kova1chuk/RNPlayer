import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

interface GetTracksParams {
  albumId?: string;
  artistId?: string;
  startDate?: Date;
  endDate?: Date;
  orderBy?: 'name' | 'lastAdded' | 'duration' | 'albumName' | 'artistName';
  orderDirection?: 'asc' | 'desc';
  limit?: number;
  offset?: number;
}

export const getTracks = async (params: GetTracksParams) => {
  const {
    albumId,
    artistId,
    startDate,
    endDate,
    orderBy = 'name',
    orderDirection,
    limit = 10,
    offset = 0,
  } = params;

  let tracksRef: FirebaseFirestoreTypes.Query = firestore().collection('Tracks');
  // Filter by album
  if (albumId) {
    tracksRef = tracksRef.where('albumId', '==', albumId);
  }
  // Filter by artist
  if (artistId) {
    tracksRef = tracksRef.where('artistId', '==', artistId);
  }

  // Filter by release date range
  if (startDate && endDate) {
    tracksRef = tracksRef.where('releaseDate', '>=', startDate).where('releaseDate', '<=', endDate);
  }

  // Order by field
  if (orderBy) {
    if (orderBy === 'duration') {
      if (orderDirection === 'desc') {
        tracksRef = tracksRef.orderBy('duration', 'desc');
      } else {
        tracksRef = tracksRef.orderBy('duration');
      }
    } else {
      tracksRef = tracksRef.orderBy(orderBy);
    }
  }

  try {
    // Get data with limit and offset
    const data = await tracksRef
      .startAt(offset * limit)
      .limit(limit)
      .get();
    // const lastVisibleDoc = data.docs[data.docs.length - 1];

    console.log('Data:', data);

    const tracks: any[] = [];
    data.forEach(function (doc) {
      tracks.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    console.log(tracks);

    return tracks;
  } catch (error) {
    console.log('Error getting tracks:', error);
  }
};
