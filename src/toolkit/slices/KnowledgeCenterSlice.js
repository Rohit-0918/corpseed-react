import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../httpCommon";

export const getKnowledgeCenterData = createAsyncThunk(
  "knowledge-center/getKnowledgeCenterData",
  async (slug, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/v1/knowledge-centre/${slug}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const knowledgeCenterSlice = createSlice({
  name: "knowledgeCenter",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getKnowledgeCenterData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getKnowledgeCenterData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getKnowledgeCenterData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default knowledgeCenterSlice.reducer;
