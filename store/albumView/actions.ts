// import { ActionCreator, Dispatch } from 'redux';
// import { ThunkAction } from 'redux-thunk';
// import { AlbumViewActionTypes, AlbumViewState, AlbumViewAction } from './types';
// import { getAlbumById, updateAlbum } from '../../api/albums';

// export const getAlbum: ActionCreator<
//   ThunkAction<Promise<void>, AlbumViewState, null, AlbumViewAction>
// > = (albumId: string) => {
//   return async (dispatch: Dispatch) => {
//     dispatch({ type: AlbumViewActionTypes.GET_ALBUM_VIEW_REQUEST });

//     try {
//       const album = await getAlbumById(albumId);

//       dispatch({
//         type: AlbumViewActionTypes.GET_ALBUM_VIEW_SUCCESS,
//         payload: { album },
//       });
//     } catch (error) {
//       dispatch({
//         type: AlbumViewActionTypes.GET_ALBUM_VIEW_FAILURE,
//         payload: { error: error.message },
//       });
//     }
//   };
// };

// export const updateAlbumData: ActionCreator<
//   ThunkAction<Promise<void>, AlbumViewState, null, AlbumViewAction>
// > = (albumId: string, albumData: Partial<Album>) => {
//   return async (dispatch: Dispatch) => {
//     try {
//       const updatedAlbum = await updateAlbum(albumId, albumData);

//       dispatch({
//         type: AlbumViewActionTypes.UPDATE_ALBUM_VIEW,
//         payload: { albumData: updatedAlbum },
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };
// };
