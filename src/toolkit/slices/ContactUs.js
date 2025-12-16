import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../httpCommon";

export const getContactData = createAsyncThunk(
  "contact/getContactDetails",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("api/v1/contact-us");
      return response.data || [];
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Slice
const ContactSlice = createSlice({
  name: "contact",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContactData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getContactData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getContactData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default ContactSlice.reducer;
