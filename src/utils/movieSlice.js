import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;

//ACTION_CONSTANTS.ts
//export const INCREMENT = "INCREMENT"

//ACTIONS.ts

/**
 *  export const incrementValue = (value) => {
 *  return {
 *  type: INCREMENT,
 *  payload: value,
 * }
 * }
 */

//rootReducer.js
//combineRuders --> multiple redicers import and combine({ reducerName: importedReducer
// })

//incremenReducer.js
//const initialState = {}
//export default incrementReducer = (state = initialState, action) => {
// switch(action.type)
//

//}
// case INCREMNT:
// ifNumber(action.payload){
// state.xyz = action.payload
// }
// }
