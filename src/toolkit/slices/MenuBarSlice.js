import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../httpCommon";

// export const getMenuData = createAsyncThunk(
//   "menu/getMenuData",
//   async (slug, { rejectWithValue }) => {
//     try {
//       const url = slug
//         ? `https://www.corpseed.com/api/menu/dynamic`
//         : "https://www.corpseed.com/api/menu/dynamic";

//       const response = await axios.get(url);
//       return response.data || [];
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );
export const getMenuData = createAsyncThunk(
  "home/search",
  async (_, { rejectWithValue }) => {
    try {
      const response = await url.get("/search/popular-services-blogs");
      return response?.data || [];
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
