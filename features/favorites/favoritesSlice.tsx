import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export interface IFavoritesSlice {
  ids: string[];
}
const initialState: IFavoritesSlice = {
  ids: [],
};
const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<{ id: string }>) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action: PayloadAction<{ id: string }>) => {
      state.ids = state.ids.filter((id) => id !== action.payload.id);
    },
  },
});
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
const favoritesReducer = favoritesSlice.reducer;
export default favoritesReducer;
