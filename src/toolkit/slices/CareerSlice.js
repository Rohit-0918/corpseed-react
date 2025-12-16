import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../httpCommon";


export const getCareerData = createAsyncThunk(
  "/join-our-team",
  async (slug, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/v1/join-our-team");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
const CareerSlice = createSlice({
  name: "career",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCareerData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCareerData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getCareerData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default CareerSlice.reducer;
