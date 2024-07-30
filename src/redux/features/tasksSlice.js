import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export default tasksSlice.reducer;
