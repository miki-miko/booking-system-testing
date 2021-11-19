import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BookingI, NewTableI, TableI } from "../../Interfaces";
import { RootState } from "../reduxStore";
import axios, { AxiosError } from "axios";

type RetrieveTables = {
  tables: TableI[];
};

export const fetchAllTables = createAsyncThunk(
  "tables/fetchAllTables",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<RetrieveTables>(
        "http://localhost:5000/tables"
      );
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      return thunkAPI.rejectWithValue({ errorMessage: axiosError.message });
    }
  }
);

export const addTable = createAsyncThunk(
  "tables/addTable",
  async (newTable: NewTableI, thunkAPI) => {
    try {
      const response = await axios.post<NewTableI>(
        "http://localhost:5000/tables",
        newTable
      );
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      return thunkAPI.rejectWithValue({ errorMessage: axiosError.message });
    }
  }
);

export const deleteTable = createAsyncThunk(
  "tables/deleteTable",
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.delete<number>(
        `http://localhost:5000/tables/${id}`
      );
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      return thunkAPI.rejectWithValue({ errorMessage: axiosError.message });
    }
  }
);
// Selectors

export const tablesSelector = (state: RootState) => {
  return state.tables.tables;
};
export const filteredTablesSelector = (state: RootState) => {
  return state.tables.tablesFiltered;
};
export const errorSelector = (state: RootState) => {
  return state.tables.error;
};
export const capacitySelector = (state: RootState) => {
  return state.tables.capacity;
};
export const locationSelector = (state: RootState) => {
  return state.tables.location;
};
export const loadingSelector = (state: RootState) => {
  return state.tables.loading;
};

const tablesSlice = createSlice({
  name: "tables",
  initialState: {
    tables: new Array<TableI>(),
    tablesFiltered: new Array<TableI>(),
    capacity: 0,
    location: "",
    bookings: new Array<BookingI>(),
    error: false || true,
    loading: false,
  },
  reducers: {
    filterTables(state, action: PayloadAction<TableI[]>) {
      state.tablesFiltered = action.payload;
    },
    storeCapacity(state, action: PayloadAction<number>) {
      state.capacity = action.payload;
    },
    storeLocation(state, action: PayloadAction<string>) {
      state.location = action.payload;
    },
    discardError(state) {
      state.error = false;
    },
    triggerError(state) {
      state.error = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllTables.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllTables.fulfilled, (state, action) => {
      state.loading = false;
      state.tables = action.payload as TableI[];
    });
    builder.addCase(fetchAllTables.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });

    builder.addCase(addTable.pending, (state) => {
      state.loading = false;
    });
    builder.addCase(addTable.fulfilled, (state, action: any) => {
      state.tables = [...state.tables, action.payload];
      state.loading = false;
    });
    builder.addCase(addTable.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(deleteTable.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteTable.fulfilled, (state, action) => {
      state.tables = state.tables.filter(
        (table: { id: number }) => table.id !== action.payload
      );
      state.loading = false;
    });
    builder.addCase(deleteTable.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const {
  filterTables,
  storeCapacity,
  storeLocation,
  discardError,
  triggerError,
} = tablesSlice.actions;

export default tablesSlice.reducer;
