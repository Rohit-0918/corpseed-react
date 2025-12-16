import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../httpCommon";

export const getIndustriesData = createAsyncThunk(
  "industries/getIndustriesData",
  async (slug, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/v1/industries/${slug}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const industriesSlice = createSlice({
  name: "industries",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getIndustriesData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getIndustriesData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getIndustriesData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default industriesSlice.reducer;
