import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../httpCommon";

export const getHomeData = createAsyncThunk(
  "home/getHomeData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/v1/home");
      return response?.data || [];
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getBookMeetingData = createAsyncThunk(
  "home/getBookMeetingData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/v1/book-meeting");
      return response?.data || [];
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const postBookMeetingData = createAsyncThunk(
  "home/postBookMeetingData",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/v1/book-meeting", payload);
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const HomeSlice = createSlice({
  name: "home",
  initialState: {
    data: null,
    bookMeetingData: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Home Data
      .addCase(getHomeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getHomeData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getHomeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Book Meeting (GET)
      .addCase(getBookMeetingData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBookMeetingData.fulfilled, (state, action) => {
        state.loading = false;
        state.bookMeetingData = action.payload;
      })
      .addCase(getBookMeetingData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Book Meeting (POST)
      .addCase(postBookMeetingData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postBookMeetingData.fulfilled, (state, action) => {
        state.loading = false;
        state.bookMeetingData = action.payload;
      })
      .addCase(postBookMeetingData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default HomeSlice.reducer;
