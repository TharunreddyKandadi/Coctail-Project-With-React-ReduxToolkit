import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCocktails = createAsyncThunk(
  "cocktails/fetchCocktails",
  async () => {
    return fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    ).then((res) => res.json());
  }
);
export const fetchSingleCocktails = createAsyncThunk(
  "cocktails/fetchSingleCocktails",
  async (id) => {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    ).then((res) => res.json());
  }
);
export const fetchSearchCocktails = createAsyncThunk(
  "cocktails/fetchSearchCocktails",
  async ({ SearchValue }) => {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${SearchValue}`
    ).then((res) => res.json());
  }
);

const cocktailSlice = createSlice({
  name: "coctails",
  initialState: {
    loading: false,
    Coctails: [],
    error: null,
    Coctail: []
  },
  extraReducers: {
    [fetchCocktails.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCocktails.fulfilled]: (state, action) => {
      state.loading = false;
      state.Coctails = action.payload.drinks;
    },
    [fetchCocktails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchSingleCocktails.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSingleCocktails.fulfilled]: (state, action) => {
      state.loading = false;
      state.Coctail = action.payload.drinks;
    },
    [fetchSingleCocktails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchSearchCocktails.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSearchCocktails.fulfilled]: (state, action) => {
      state.loading = false;
      state.Coctails = action.payload.drinks;
    },
    [fetchSearchCocktails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});
export default cocktailSlice;
