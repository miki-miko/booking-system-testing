import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { BookingI, TableI } from "../../Interfaces";

import axios, { AxiosError } from "axios";
import { RootState } from "../reduxStore";

export const addBooking = createAsyncThunk(
  "bookings/addBooking",
  async (newBooking: BookingI, thunkAPI) => {
    try {
      const response = await axios.post<BookingI>(
        "http://localhost:5000/bookings",
        newBooking
      );
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      return thunkAPI.rejectWithValue({ errorMessage: axiosError.message });
    }
  }
);

const bookingsSlice = createSlice({
  name: "bookings",
  initialState: {
    tables: new Array<TableI>(),
    tablesFiltered: new Array<TableI>(),
    capacity: 0,
    location: "",
    bookings: new Array<BookingI>(),
    error: false || true,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addBooking.pending, (state) => {
      state.loading = false;
    });
    builder.addCase(addBooking.fulfilled, (state, action: any) => {
      state.bookings = [...state.bookings, action.payload];
      state.loading = false;
    });
    builder.addCase(addBooking.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const bookingsSelector = (state: RootState) => {
  return state.bookings.bookings;
};

export default bookingsSlice.reducer;
