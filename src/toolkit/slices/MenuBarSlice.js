import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Nav thunk
export const getNavData = createAsyncThunk(
  "menu/getNavData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/menu/dynamic");
      return response?.data || {};
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Example other thunk
export const getMenuData = createAsyncThunk(
  "menu/getMenuData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/menu/static");
      return response?.data || {};
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // nav
      .addCase(getNavData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getNavData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getNavData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // optional static menu
      .addCase(getMenuData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMenuData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getMenuData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default menuSlice.reducer;
